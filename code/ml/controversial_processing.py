
import os
import sys
import logging
import argparse

# Import pyspark and build Spark session
from pyspark.sql.functions import *
from pyspark.sql.types import (
    DoubleType,
    IntegerType,
    StringType,
    StructField,
    StructType,
)

import json
import sparknlp
import numpy as np
import pandas as pd
import pyspark.sql.functions as F
from pyspark.sql import SparkSession

from pyspark.ml.feature import OneHotEncoder, StringIndexer, IndexToString, VectorAssembler
from pyspark.ml.classification import RandomForestClassifier, LogisticRegression, NaiveBayes, GBTClassifier, LinearSVC
from pyspark.ml.evaluation import BinaryClassificationEvaluator, MulticlassClassificationEvaluator
from pyspark.ml import Pipeline, Model

logging.basicConfig(format='%(asctime)s,%(levelname)s,%(module)s,%(filename)s,%(lineno)d,%(message)s', level=logging.DEBUG)
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))

def main():
    parser = argparse.ArgumentParser(description="app inputs and outputs")
    parser.add_argument("--ml_model", type=str, help="Model used for Classification")
    parser.add_argument("--s3_dataset_path", type=str, help="Path of dataset in S3")
    parser.add_argument("--s3_output_bucket", type=str, help="s3 output bucket")
    parser.add_argument("--s3_output_key_prefix", type=str, help="s3 output key prefix")
    args = parser.parse_args()
    logger.info(f"args={args}")
    
    spark = SparkSession.builder \
        .appName("Spark ML")\
        .config("spark.driver.memory","16G")\
        .config("spark.driver.maxResultSize", "0") \
        .config("spark.kryoserializer.buffer.max", "2000M")\
        .getOrCreate()
    
    logger.info(f"Spark version: {spark.version}")
    logger.info(f"sparknlp version: {sparknlp.version()}")
    
    # This is needed to save RDDs which is the only way to write nested Dataframes into CSV format
    sc = spark.sparkContext
    sc._jsc.hadoopConfiguration().set(
        "mapred.output.committer.class", "org.apache.hadoop.mapred.FileOutputCommitter"
    )
    
    # get model
    ml_model = args.ml_model
    
    # Downloading the data from S3 into a Dataframe
    logger.info(f"going to read {args.s3_dataset_path}")
    df = spark.read.parquet(args.s3_dataset_path, header=True)
    
    stringIndexer_controversiality = StringIndexer(inputCol="controversiality", outputCol="controversiality_str")
    stringIndexer_distinguished = StringIndexer(inputCol="distinguished", outputCol="distinguished_ix")
    stringIndexer_subreddit = StringIndexer(inputCol="subreddit", outputCol="subreddit_ix")
    
    logger.info(f"Applying stringIndexer_controversiality to the dataframe")
    indexed = stringIndexer_controversiality.fit(df).transform(df)

    logger.info(f"Applying stringIndexer_distinguished to the new dataframe `indexed`")
    indexed = stringIndexer_distinguished.fit(indexed).transform(indexed)

    logger.info(f"Applying stringIndexer_subreddit to the new dataframe `indexed`")
    indexed = stringIndexer_subreddit.fit(indexed).transform(indexed)
    
    logger.info(f"One-hot Encoding")
    onehot_subreddit = OneHotEncoder(inputCol="subreddit_ix", outputCol="subreddit_vec")
    
    logger.info(f"Vector assembling features")
    vectorAssembler_features = VectorAssembler(inputCols=['distinguished_ix', 'year', 'month', 'day', 'score', 'gilded', 'subreddit_ix'], 
                                               outputCol= 'features')
    
    logger.info(f"Creating new vectorized features df")
    features_vectorized = vectorAssembler_features.transform(indexed) # note this is a new df
    
    
    logger.info(f"Creating {ml_model}")
    if ml_model == "rf":
        pipeline_model = RandomForestClassifier(labelCol="controversiality_str", featuresCol="features", numTrees=30, weightCol="weight")
    elif ml_model == "lr":
        pipeline_model = LogisticRegression(labelCol="controversiality_str", featuresCol="features", maxIter=10, weightCol="weight")
    elif ml_model == "gbt":
        pipeline_model = GBTClassifier(labelCol="controversiality_str", featuresCol="features", maxIter=10, weightCol="weight")
    elif ml_model == "svm":
        pipeline_model = LinearSVC(labelCol="controversiality_str", featuresCol="features", maxIter=10, weightCol="weight")
    
    logger.info(f"Creating Label Converter")
    labelConverter = IndexToString(inputCol="prediction", 
                               outputCol="predictedControversiality", 
                               labels=["0", "1"])
    
    logger.info(f"Creating Pipeline")
    pipeline_model = Pipeline(stages=
                              [stringIndexer_controversiality,
                               stringIndexer_distinguished,  
                               stringIndexer_subreddit,
                               onehot_subreddit,
                               vectorAssembler_features, 
                               pipeline_model, 
                               labelConverter]
                             )

    logger.info(f"Split data into train, test, and validation")
    train_data, test_data = df.randomSplit([0.75, 0.25], 24)
    logger.info("Number of training records: " + str(train_data.count()))
    logger.info("Number of testing records : " + str(test_data.count()))
    
    logger.info(f"going to fit pipeline on train dataframe")
    model = pipeline_model.fit(train_data)
    
    # save the model
    s3_path = f"s3://{args.s3_output_bucket}/{args.s3_output_key_prefix}"
    logger.info(f"going to save model in {s3_path}")
    model.save(f"{s3_path}/{ml_model}.model")
    
if __name__ == "__main__":
    main()

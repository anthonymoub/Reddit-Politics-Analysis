
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
from sparknlp.base import *
from pyspark.ml import Pipeline
from sparknlp.annotator import *
import pyspark.sql.functions as F
from pyspark.sql import SparkSession
from sparknlp.pretrained import PretrainedPipeline

logging.basicConfig(format='%(asctime)s,%(levelname)s,%(module)s,%(filename)s,%(lineno)d,%(message)s', level=logging.DEBUG)
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))

def main():
    parser = argparse.ArgumentParser(description="app inputs and outputs")
    parser.add_argument("--df_target_col", type=str, help="Target Column for Sentiment Analysis")
    parser.add_argument("--s3_dataset_path", type=str, help="Path of dataset in S3")
    parser.add_argument("--s3_output_bucket", type=str, help="s3 output bucket")
    parser.add_argument("--s3_output_key_prefix", type=str, help="s3 output key prefix")
    args = parser.parse_args()
    logger.info(f"args={args}")
    
    spark = SparkSession.builder \
        .appName("Spark NLP")\
        .config("spark.driver.memory","16G")\
        .config("spark.driver.maxResultSize", "0") \
        .config("spark.kryoserializer.buffer.max", "2000M")\
        .config("spark.jars.packages", "com.johnsnowlabs.nlp:spark-nlp_2.12:5.1.3")\
        .getOrCreate()
    
    logger.info(f"Spark version: {spark.version}")
    logger.info(f"sparknlp version: {sparknlp.version()}")
    
    # This is needed to save RDDs which is the only way to write nested Dataframes into CSV format
    sc = spark.sparkContext
    sc._jsc.hadoopConfiguration().set(
        "mapred.output.committer.class", "org.apache.hadoop.mapred.FileOutputCommitter"
    )
    
    # Downloading the data from S3 into a Dataframe
    logger.info(f"going to read {args.s3_dataset_path}")
    df = spark.read.parquet(args.s3_dataset_path, header=True)
    
    # sentiment analysis
    target_col = args.df_target_col
    MODEL_NAME = 'sentimentdl_use_twitter'
    logger.info(f"setting up an nlp pipeline with model={MODEL_NAME}")
    documentAssembler = DocumentAssembler()\
    .setInputCol(target_col)\
    .setOutputCol(f"document_{target_col}")
    
    use = UniversalSentenceEncoder.pretrained(name="tfhub_use", lang="en")\
     .setInputCols([f"document_{target_col}"])\
     .setOutputCol(f"sentence_embeddings_{target_col}")

    sentimentdl = SentimentDLModel.pretrained(name=MODEL_NAME, lang="en")\
    .setInputCols([f"sentence_embeddings_{target_col}"])\
    .setOutputCol(f"sentiment_{target_col}")

    nlpPipeline = Pipeline(
      stages = [
          documentAssembler,
          use,
          sentimentdl
      ])

    logger.info(f"going to fit pipeline on dataframe")
    nlpModel = nlpPipeline.fit(df)
    
    logger.info(f"going to transform pipeline on dataframe")
    result = nlpModel.transform(df)
    
    # save the cleaned dataframes so that these files can now be used for future analysis
    s3_path = f"s3://{args.s3_output_bucket}/{args.s3_output_key_prefix}"
    logger.info(f"going to write data in {s3_path}")
    logger.info(f"shape of the df_filtered dataframe is {result.count():,}x{len(result.columns)}")
    result.write.mode("overwrite").parquet(s3_path)
    
if __name__ == "__main__":
    main()

Highcharts.chart('container', {

    title: {
        text: 'Count of Comments Over Time',
        align: 'center'
    },

    subtitle: {
        text: 'By Subreddit.',
        align: 'center'
    },

    yAxis: {
        title: {
            text: 'Number of Comments'
        }
    },

    xAxis: {
        type: 'datetime',
        accessibility: {
            rangeDescription: 'Range: Jan 2021 to Mar 2023'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: Date.UTC(2021, 0, 1), // Jan 2021
            pointInterval: 30 * 24 * 3600 * 1000 // 30 days interval
        }
    },

    series: [
        {
          "name": "Liberal",
          "data": [
              2364,
              3340,
              3503,
              4124,
              2200,
              2731,
              3140,
              4758,
              5764,
              5065,
              3998,
              3804,
              1827,
              2821,
              3137,
              1941,
              4101,
              4886,
              3198,
              5128,
              2595,
              2929,
              1915,
              3239,
              4245,
              6279,
              3364
          ],
          "color": "green"
      },
      {
          "name": "Socialism",
          "data": [
              15061,
              19905,
              12190,
              13754,
              10767,
              16572,
              15990,
              10601,
              12169,
              12312,
              12878,
              11754,
              13312,
              10369,
              12011,
              17906,
              14680,
              9635,
              14817,
              11190,
              10972,
              13934,
              16019,
              15370,
              17527,
              14838,
              14836
          ],
          "color": "red"
      },
      {
          "name": "Libertarian",
          "data": [
              12659,
              19069,
              61677,
              127964,
              163842,
              133733,
              13313,
              151356,
              15853,
              146879,
              103709,
              145100,
              35378,
              13042,
              89069,
              185855,
              19850,
              15425,
              127885,
              150923,
              99707,
              186529,
              173766,
              139816,
              208282,
              25285,
              140937
          ],
          "color": "yellow"
      },
      {
          "name": "Conservative",
          "data": [
              203812,
              131923,
              197741,
              100924,
              186733,
              190941,
              158387,
              184703,
              89085,
              166241,
              303207,
              214024,
              283114,
              198430,
              114062,
              142394,
              105566,
              285126,
              147182,
              182363,
              228750,
              195359,
              257106,
              198848,
              355752,
              203350,
              206538
          ],
          "color": "blue"
      },
      {
          "name": "Centrist",
          "data": [
              26016,
              36968,
              24945,
              26087,
              39695,
              48077,
              50853,
              29563,
              41415,
              20152,
              40684,
              30756,
              22577,
              47499,
              27789,
              34946,
              41656,
              28970,
              34856,
              35482,
              29474,
              31963,
              33565,
              26440,
              37419,
              29814,
              44210
          ],
          "color": "grey"
      },
      {
          "name": "Finance",
          "data": [
              4943,
              5337,
              3890,
              4032,
              4368,
              4173,
              3525,
              4438,
              5282,
              4499,
              3099,
              4963,
              3947,
              5011,
              8398,
              3648,
              6239,
              4898,
              4123,
              5109,
              6216,
              4712,
              4573,
              6372,
              6288,
              6407,
              8628
          ],
          "color": "purple"
      },
      {
          "name": "Economics",
          "data": [
              71902,
              52554,
              30593,
              34304,
              50769,
              51321,
              38802,
              63649,
              92302,
              34396,
              75324,
              38416,
              73628,
              48985,
              71204,
              52738,
              32879,
              57251,
              58406,
              41956,
              32985,
              24380,
              73032,
              48990,
              37359,
              80250,
              60048
          ],
          "color": "orange"
      },
      {
          "name": "AskPolitics",
          "data": [
              1672,
              952,
              1355,
              1411,
              411,
              6407,
              5873,
              3747,
              599,
              1443,
              525,
              1422,
              1146,
              1125,
              2024,
              2615,
              396,
              8282,
              6200,
              627,
              1055,
              1320,
              678,
              263,
              6479,
              1566,
              556
          ],
          "color": "teal"
      },
      {
          "name": "ChangeMyView",
          "data": [
              148335,
              137444,
              154156,
              123953,
              147702,
              143391,
              189019,
              123030,
              152455,
              111109,
              160425,
              163666,
              175869,
              118858,
              151954,
              111208,
              134432,
              122276,
              134384,
              128046,
              158141,
              180386,
              168407,
              144730,
              145864,
              163908,
              116439
          ],
          "color": "pink"
      }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

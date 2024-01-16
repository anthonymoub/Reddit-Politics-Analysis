Highcharts.chart('container', {

    title: {
        text: 'Count of Posts Over Time',
        align: 'center'
    },

    subtitle: {
        text: 'By Subreddit.',
        align: 'center'
    },

    yAxis: {
        title: {
            text: 'Number of Posts'
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
            344,
            299,
            419,
            546,
            282,
            276,
            316,
            671,
            1058,
            446,
            600,
            447,
            296,
            261,
            267,
            400,
            326,
            426,
            339,
            332,
            350,
            353,
            295,
            318,
            744,
            361,
            314
        ],
        "color": "green"
    },
    {
        "name": "Socialism",
        "data": [
            1746,
            1382,
            1954,
            1601,
            1432,
            1717,
            1298,
            1222,
            1081,
            1701,
            1861,
            1895,
            1576,
            1077,
            1247,
            1525,
            1164,
            1102,
            1376,
            1049,
            1553,
            1338,
            1287,
            1585,
            2349,
            1832,
            1144
        ],
        "color": "red"
    },
    {
        "name": "Libertarian",
        "data": [
            552,
            702,
            1183,
            2767,
            2403,
            3000,
            630,
            3518,
            665,
            2190,
            1785,
            2226,
            872,
            514,
            1457,
            2793,
            599,
            547,
            2207,
            2877,
            1310,
            4448,
            2384,
            3233,
            2860,
            757,
            2674
        ],
        "color": "yellow"
    },
    {
        "name": "Conservative",
        "data": [
            14116,
            9907,
            12029,
            7158,
            9832,
            12371,
            11706,
            11992,
            7026,
            12468,
            15633,
            12623,
            17837,
            13818,
            8942,
            11237,
            6980,
            16623,
            10166,
            13868,
            14527,
            12435,
            15437,
            15331,
            21493,
            13853,
            14530
        ],
        "color": "blue"
    },
    {
        "name": "Centrist",
        "data": [
            677,
            465,
            525,
            358,
            550,
            503,
            1194,
            393,
            549,
            332,
            523,
            399,
            345,
            677,
            336,
            656,
            507,
            445,
            515,
            401,
            407,
            431,
            398,
            372,
            459,
            453,
            724
        ],
        "color": "grey"
    },
    {
        "name": "Finance",
        "data": [
            985,
            869,
            799,
            763,
            2472,
            849,
            1213,
            897,
            1082,
            983,
            774,
            675,
            774,
            3614,
            868,
            750,
            783,
            777,
            982,
            830,
            1175,
            866,
            783,
            1261,
            885,
            948,
            1247
        ],
        "color": "purple"
    },
    {
        "name": "Economics",
        "data": [
            6675,
            1431,
            828,
            1048,
            1358,
            984,
            1177,
            1374,
            1644,
            1076,
            1224,
            1061,
            1223,
            1132,
            1100,
            1234,
            852,
            1110,
            4480,
            1348,
            765,
            939,
            1593,
            1455,
            936,
            1301,
            1256
        ],
        "color": "orange"
    },
    {
        "name": "AskPolitics",
        "data": [
            155,
            172,
            153,
            119,
            83,
            465,
            389,
            265,
            149,
            174,
            143,
            126,
            132,
            151,
            185,
            205,
            100,
            1027,
            398,
            130,
            124,
            186,
            108,
            85,
            407,
            176,
            96
        ],
        "color": "teal"
    },
    {
        "name": "ChangeMyView",
        "data": [
            2084,
            2025,
            3013,
            1965,
            2324,
            2222,
            2801,
            2021,
            2229,
            1779,
            2352,
            2386,
            3323,
            2030,
            2311,
            2072,
            2012,
            1977,
            2050,
            2045,
            3507,
            3414,
            2822,
            2321,
            3031,
            2744,
            1772
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

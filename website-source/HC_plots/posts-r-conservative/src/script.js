Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'U.S. Real GDP and Number of Posts By Sentiment (r/Conservative)',
        align: 'center'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://fred.stlouisfed.org/series/GDPC1"' +
            'target="_blank">FRED</a>',
        align: 'center'
    },
    annotations: [{
        labels: [{
            point: {
                x: 5,
                y: 2000,
                xAxis: 0,
                yAxis: 0
            },
            text: 'Label'
        }]
    }],
    xAxis: [{
        categories: ['Jan 2021', 'Feb 2021', 'Mar 2021', 'Apr 2021', 'May 2021', 'Jun 2021',
            'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021',
            'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022',
            'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022',
            'Jan 2023', 'Feb 2023', 'Mar 2023'
        ],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '${value}',
            style: {
                color: 'purple'
            }
        },
        title: {
            text: 'U.S. Real GDP ($M)',
            style: {
                color: 'purple'
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Number of Posts',
            style: {
                color: 'gray'
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: 'black'
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 60,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    annotations: [{
        labels: [{
            point: {
                x: 18,
                xAxis: 0,
                y: 21708,
                yAxis: 0
            },
            text: 'U.S. Real GDP contracts 2 quarters in a row'
        }],
        labelOptions: {
            backgroundColor: 'white',
            borderColor: 'silver'
        }
    }],
    series: [{
            name: 'Number of Positive Posts',
            type: 'column',
            yAxis: 1,
            data: [11810, 8246, 8827, 8169, 7674, 7053, 7079, 6974, 6655, 6960, 8153, 7855, 7818, 7594, 5837, 6142, 5872, 6322, 6252, 5558, 4756, 4856, 5075, 3466, 3456, 3413, 4199],
            color: 'green', // Set the color for positive posts
            tooltip: {
                valueSuffix: ''
            }
        },
        {
            name: 'Number of Neutral Posts',
            type: 'column',
            yAxis: 1,
            data: [1063, 630, 709, 692, 628, 572, 570, 559, 370, 383, 493, 453, 470, 491, 439, 479, 486, 548, 510, 454, 414, 431, 388, 261, 241, 289, 372],
            color: 'black',
            tooltip: {
                valueSuffix: ''
            }
        }, {
            name: 'Number of Negative Posts',
            type: 'column',
            yAxis: 1,
            data: [8594, 6749, 8286, 7747, 7127, 6220, 6207, 7782, 5337, 5114, 5868, 5505, 6229, 6022, 5740, 5074, 5619, 5739, 5663, 5219, 4725, 4873, 4360, 3295, 3279, 3451, 4370],
            color: 'red', // Set the color for negative posts
            tooltip: {
                valueSuffix: ''
            }
        }, {
            name: 'U.S. Real GDP ($M)',
            type: 'spline',
            data: [20724.128, null, null, 20990.541, null, null, 21309.544, null, null, 21483.083, null, null, 21847.602, null, null, 21738.871, null, null, 21708.160, null, null, 21851.134, null, null, 21989.981],
            connectNulls: true,
            color: 'purple',
            tooltip: {
                valueSuffix: ''
            }
        }
    ]
});
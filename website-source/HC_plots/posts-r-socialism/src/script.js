Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'U.S. Real GDP and Number of Posts By Sentiment (r/Socialism)',
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
            data: [1429, 1162, 1104, 1049, 994, 914, 1064, 922, 978, 1039, 901, 1133, 1074, 895, 715, 794, 785, 754, 685, 649, 747, 620, 552, 623, 733, 626, 678],
            color: 'green', // Set the color for positive posts
            tooltip: {
                valueSuffix: ''
            }
        },
        {
            name: 'Number of Neutral Posts',
            type: 'column',
            yAxis: 1,
            data: [115, 86, 79, 92, 78, 59, 79, 68, 55, 37, 59, 61, 63, 58, 41, 52, 62, 48, 45, 48, 55, 47, 52, 24, 37, 39, 49],
            color: 'black',
            tooltip: {
                valueSuffix: ''
            }
        }, {
            name: 'Number of Negative Posts',
            type: 'column',
            yAxis: 1,
            data: [797, 706, 712, 691, 787, 578, 603, 594, 568, 499, 471, 507, 578, 570, 575, 532, 529, 493, 432, 445, 484, 413, 445, 430, 477, 435, 495],
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
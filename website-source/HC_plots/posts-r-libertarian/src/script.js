Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'U.S. Real GDP and Number of Posts By Sentiment (r/Libertarian)',
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
            data: [2576, 1671, 1839, 1696, 1436, 1398, 1630, 1508, 1740, 1345, 1471, 1413, 1336, 1228, 917, 806, 711, 669, 493, 426, 325, 347, 356, 298, 259, 282, 357],
            color: 'green', // Set the color for positive posts
            tooltip: {
                valueSuffix: ''
            }
        },
        {
            name: 'Number of Neutral Posts',
            type: 'column',
            yAxis: 1,
            data: [176, 96, 126, 104, 96, 101, 101, 81, 73, 69, 67, 80, 63, 61, 58, 43, 51, 39, 19, 29, 24, 17, 25, 23, 20, 24, 25],
            color: 'black',
            tooltip: {
                valueSuffix: ''
            }
        }, {
            name: 'Number of Negative Posts',
            type: 'column',
            yAxis: 1,
            data: [1696, 1230, 1553, 1431, 1235, 1172, 1146, 1203, 1045, 776, 845, 910, 826, 918, 808, 607, 547, 475, 360, 302, 250, 301, 249, 231, 235, 241, 320],
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
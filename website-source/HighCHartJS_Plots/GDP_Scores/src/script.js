Highcharts.chart('container', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'U.S. Real GDP and Average Submission Score in r/Economics',
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
            point: { x: 5, y: 2000, xAxis:0, yAxis: 0 },
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
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'U.S. Real GDP ($M)',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Average Submission Score',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[0]
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
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
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
        name: 'Average Submission Score',
        type: 'column',
        yAxis: 1,
        data: [246.18,
 138.59,
 171.74,
 153.38,
 155.08,
 128.58,
 110.50,
 148.82,
 144.09,
 176.43,
 176.98,
 132.49,
 145.81,
 313.81,
 296.31,
 271.40,
 317.75,
 282.42,
 282.12,
 66.64,
 50.13,
 237.01,
 259.87,
 310.11,
 364.09,
 376.58,
 335.27],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'U.S. Real GDP ($M)',
        type: 'spline',
        data: [20724.128, null, null, 20990.541, null, null, 21309.544, null, null, 21483.083, null, null, 21847.602, null, null, 21738.871, null, null, 21708.160, null, null, 21851.134, null, null, 21989.981],
      connectNulls: true,
        tooltip: {
            valueSuffix: ''
        }
    }]
});
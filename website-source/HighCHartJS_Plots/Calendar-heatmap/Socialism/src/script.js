// Substring template helper for the responsive labels
Highcharts.Templating.helpers.substr = (s, from, length) =>
    s.substr(from, length);

// Create the chart
Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Number of Reddit Posts per Month, Day (Socialism)',
        style: {
            fontSize: '1em'
        }
    },

    xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October' , 'November' , 'December']
    },

    yAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday' , 'Sunday'],
        title: null,
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormat: '{(add index 1)}. ' +
                '{series.xAxis.categories.(x)} sales ' +
                '{series.yAxis.categories.(y)}, {value}.'
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        format: '<b>{series.xAxis.categories.(point.x)}</b> sold<br>' +
            '<b>{point.value}</b> items on <br>' +
            '<b>{series.yAxis.categories.(point.y)}</b>'
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [[3, 4, 543],
 [3, 0, 418],
 [3, 5, 443],
 [3, 6, 413],
 [3, 3, 491],
 [3, 1, 447],
 [3, 2, 459],
 [7, 4, 383],
 [7, 0, 412],
 [7, 5, 350],
 [7, 6, 363],
 [7, 3, 359],
 [7, 1, 459],
 [7, 2, 403],
 [11, 4, 420],
 [11, 0, 333],
 [11, 5, 329],
 [11, 6, 310],
 [11, 3, 444],
 [11, 1, 362],
 [11, 2, 580],
 [1, 4, 652],
 [1, 0, 670],
 [1, 5, 628],
 [1, 6, 620],
 [1, 3, 672],
 [1, 1, 702],
 [1, 2, 637],
 [0, 4, 760],
 [0, 0, 774],
 [0, 5, 780],
 [0, 6, 785],
 [0, 3, 775],
 [0, 1, 756],
 [0, 2, 683],
 [6, 4, 477],
 [6, 0, 379],
 [6, 5, 432],
 [6, 6, 419],
 [6, 3, 446],
 [6, 1, 386],
 [6, 2, 371],
 [5, 4, 444],
 [5, 0, 328],
 [5, 5, 396],
 [5, 6, 315],
 [5, 3, 461],
 [5, 1, 439],
 [5, 2, 468],
 [2, 4, 624],
 [2, 0, 615],
 [2, 5, 512],
 [2, 6, 493],
 [2, 3, 684],
 [2, 1, 758],
 [2, 2, 769],
 [4, 4, 392],
 [4, 0, 497],
 [4, 5, 434],
 [4, 6, 518],
 [4, 3, 440],
 [4, 1, 495],
 [4, 2, 461],
 [10, 4, 338],
 [10, 0, 356],
 [10, 5, 314],
 [10, 6, 305],
 [10, 3, 305],
 [10, 1, 457],
 [10, 2, 406],
 [9, 4, 397],
 [9, 0, 375],
 [9, 5, 434],
 [9, 6, 394],
 [9, 3, 358],
 [9, 1, 373],
 [9, 2, 326],
 [8, 4, 428],
 [8, 0, 369],
 [8, 5, 367],
 [8, 6, 353],
 [8, 3, 524],
 [8, 1, 352],
 [8, 2, 495]],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        format: '{substr value 0 1}'
                    }
                }
            }
        }]
    }

});
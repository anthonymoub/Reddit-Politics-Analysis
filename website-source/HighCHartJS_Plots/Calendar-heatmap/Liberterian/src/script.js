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
        text: 'Number of Reddit Posts per Month, Day (Liberterian)',
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
        maxColor: '#49B092'
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
        data: [[3, 4, 829],
 [3, 0, 604],
 [3, 5, 579],
 [3, 6, 476],
 [3, 3, 849],
 [3, 1, 659],
 [3, 2, 694],
 [7, 4, 504],
 [7, 0, 596],
 [7, 5, 376],
 [7, 6, 441],
 [7, 3, 492],
 [7, 1, 608],
 [7, 2, 533],
 [11, 4, 509],
 [11, 0, 357],
 [11, 5, 317],
 [11, 6, 391],
 [11, 3, 488],
 [11, 1, 385],
 [11, 2, 508],
 [1, 4, 934],
 [1, 0, 741],
 [1, 5, 712],
 [1, 6, 715],
 [1, 3, 915],
 [1, 1, 819],
 [1, 2, 918],
 [0, 4, 1056],
 [0, 0, 1026],
 [0, 5, 997],
 [0, 6, 925],
 [0, 3, 1182],
 [0, 1, 952],
 [0, 2, 1050],
 [6, 4, 693],
 [6, 0, 480],
 [6, 5, 538],
 [6, 6, 421],
 [6, 3, 642],
 [6, 1, 489],
 [6, 2, 486],
 [5, 4, 597],
 [5, 0, 514],
 [5, 5, 479],
 [5, 6, 425],
 [5, 3, 589],
 [5, 1, 551],
 [5, 2, 702],
 [2, 4, 876],
 [2, 0, 866],
 [2, 5, 686],
 [2, 6, 636],
 [2, 3, 933],
 [2, 1, 978],
 [2, 2, 1030],
 [4, 4, 612],
 [4, 0, 621],
 [4, 5, 547],
 [4, 6, 519],
 [4, 3, 549],
 [4, 1, 627],
 [4, 2, 602],
 [10, 4, 435],
 [10, 0, 527],
 [10, 5, 366],
 [10, 6, 303],
 [10, 3, 367],
 [10, 1, 523],
 [10, 2, 493],
 [9, 4, 505],
 [9, 0, 373],
 [9, 5, 407],
 [9, 6, 379],
 [9, 3, 439],
 [9, 1, 374],
 [9, 2, 378],
 [8, 4, 571],
 [8, 0, 450],
 [8, 5, 461],
 [8, 6, 376],
 [8, 3, 601],
 [8, 1, 461],
 [8, 2, 539]],
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
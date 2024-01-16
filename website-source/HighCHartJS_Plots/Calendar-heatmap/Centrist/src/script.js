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
        text: 'Number of Reddit Posts per Month, Day (Centrist)',
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
        maxColor: '#9D57F9'
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
        data: [[3, 4, 189],
 [3, 0, 138],
 [3, 5, 113],
 [3, 6, 82],
 [3, 3, 197],
 [3, 1, 150],
 [3, 2, 145],
 [7, 4, 153],
 [7, 0, 160],
 [7, 5, 86],
 [7, 6, 121],
 [7, 3, 179],
 [7, 1, 185],
 [7, 2, 181],
 [11, 4, 151],
 [11, 0, 81],
 [11, 5, 87],
 [11, 6, 83],
 [11, 3, 132],
 [11, 1, 88],
 [11, 2, 107],
 [1, 4, 251],
 [1, 0, 190],
 [1, 5, 182],
 [1, 6, 166],
 [1, 3, 280],
 [1, 1, 193],
 [1, 2, 258],
 [0, 4, 323],
 [0, 0, 285],
 [0, 5, 277],
 [0, 6, 234],
 [0, 3, 352],
 [0, 1, 274],
 [0, 2, 307],
 [6, 4, 169],
 [6, 0, 108],
 [6, 5, 153],
 [6, 6, 113],
 [6, 3, 155],
 [6, 1, 118],
 [6, 2, 156],
 [5, 4, 182],
 [5, 0, 167],
 [5, 5, 151],
 [5, 6, 143],
 [5, 3, 207],
 [5, 1, 175],
 [5, 2, 222],
 [2, 4, 220],
 [2, 0, 191],
 [2, 5, 133],
 [2, 6, 131],
 [2, 3, 246],
 [2, 1, 229],
 [2, 2, 250],
 [4, 4, 185],
 [4, 0, 181],
 [4, 5, 138],
 [4, 6, 158],
 [4, 3, 179],
 [4, 1, 184],
 [4, 2, 201],
 [10, 4, 100],
 [10, 0, 122],
 [10, 5, 76],
 [10, 6, 93],
 [10, 3, 120],
 [10, 1, 162],
 [10, 2, 112],
 [9, 4, 129],
 [9, 0, 116],
 [9, 5, 126],
 [9, 6, 90],
 [9, 3, 130],
 [9, 1, 110],
 [9, 2, 137],
 [8, 4, 125],
 [8, 0, 88],
 [8, 5, 63],
 [8, 6, 68],
 [8, 3, 162],
 [8, 1, 111],
 [8, 2, 129]],
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
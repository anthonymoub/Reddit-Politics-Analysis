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
        text: 'Number of Reddit Posts per Month, Day (Conservative)',
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
        maxColor: '#E9391B'
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
        data: [[3, 4, 4825],
 [3, 0, 3795],
 [3, 5, 3591],
 [3, 6, 2862],
 [3, 3, 4784],
 [3, 1, 4285],
 [3, 2, 4187],
 [7, 4, 3696],
 [7, 0, 4301],
 [7, 5, 2714],
 [7, 6, 3064],
 [7, 3, 3851],
 [7, 1, 4804],
 [7, 2, 4138],
 [11, 4, 3364],
 [11, 0, 2766],
 [11, 5, 2473],
 [11, 6, 2245],
 [11, 3, 3679],
 [11, 1, 2864],
 [11, 2, 3453],
 [1, 4, 5768],
 [1, 0, 4962],
 [1, 5, 4680],
 [1, 6, 4437],
 [1, 3, 5902],
 [1, 1, 5416],
 [1, 2, 5742],
 [0, 4, 6604],
 [0, 0, 6224],
 [0, 5, 5686],
 [0, 6, 5488],
 [0, 3, 6646],
 [0, 1, 5793],
 [0, 2, 6562],
 [6, 4, 4549],
 [6, 0, 3371],
 [6, 5, 3718],
 [6, 6, 3056],
 [6, 3, 4222],
 [6, 1, 3657],
 [6, 2, 3730],
 [5, 4, 3864],
 [5, 0, 3424],
 [5, 5, 3203],
 [5, 6, 2811],
 [5, 3, 4164],
 [5, 1, 4297],
 [5, 2, 4713],
 [2, 4, 5872],
 [2, 0, 5123],
 [2, 5, 4255],
 [2, 6, 3863],
 [2, 3, 6350],
 [2, 1, 6693],
 [2, 2, 6652],
 [4, 4, 3828],
 [4, 0, 4111],
 [4, 5, 3419],
 [4, 6, 3383],
 [4, 3, 3949],
 [4, 1, 4487],
 [4, 2, 4252],
 [10, 4, 3474],
 [10, 0, 3614],
 [10, 5, 2766],
 [10, 6, 2599],
 [10, 3, 3436],
 [10, 1, 4308],
 [10, 2, 4162],
 [9, 4, 3559],
 [9, 0, 3181],
 [9, 5, 3183],
 [9, 6, 2900],
 [9, 3, 3292],
 [9, 1, 3212],
 [9, 2, 3307],
 [8, 4, 3825],
 [8, 0, 2746],
 [8, 5, 2670],
 [8, 6, 2244],
 [8, 3, 4138],
 [8, 1, 2992],
 [8, 2, 3663]],
        dataLabels: {
            enabled: true,
            color: '#000000',
             backgroundColor: 'none'
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
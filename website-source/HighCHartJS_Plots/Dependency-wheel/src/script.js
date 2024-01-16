Highcharts.chart('container', {

    title: {
        text: 'Common Users between Subreddits'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
        }
    },

    series: [{
        keys: ['from', 'to', 'weight'],
data: [['Libertarian', 'Centrist', 274],
 ['Libertarian', 'Conservative', 2494],
 ['Libertarian', 'Socialism', 648],
 ['Libertarian', 'Liberal', 426],
 ['Centrist', 'Conservative', 378],
 ['Centrist', 'Socialism', 82],
 ['Centrist', 'Liberal', 93],
 ['Conservative', 'Socialism', 863],
 ['Conservative', 'Liberal', 815],
 ['Socialism', 'Liberal', 293],
 ['Libertarian', 'Ask_Politics', 124],
 ['Libertarian', 'ChangeMyView', 446],
 ['Centrist', 'Ask_Politics', 47],
 ['Centrist', 'ChangeMyView', 170],
 ['Conservative', 'Ask_Politics', 208],
 ['Conservative', 'ChangeMyView', 880],
 ['Socialism', 'Ask_Politics', 93],
 ['Socialism', 'ChangeMyView', 266],
 ['Liberal', 'Ask_Politics', 50],
 ['Liberal', 'ChangeMyView', 126],
 ['Ask_Politics', 'ChangeMyView', 190]]

,
        type: 'dependencywheel',
        name: 'Dependency wheel series',
        dataLabels: {
            color: '#333',
            style: {
                textOutline: 'none'
            },
            textPath: {
                enabled: true
            },
            distance: 10
        },
        size: '95%'
    }]

});

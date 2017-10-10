// Карта 

jQuery(document).ready(function () 
    {jQuery('#vmap').vectorMap(
        {
            map: 'usa_en',
            backgroundColor: '#153c63',
            borderColor: '#153c63',
            borderOpacity: 0.75,
            borderWidth: 2,
            color: '#a5bfdd',
            enableZoom: true,
            hoverColor: null,
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedRegions: null,
            selectedColor: null,
            showTooltip: false,
            showLabels: false,
            colors: {
                nv: '#cebb53'
            },
            hoverColors: {
                nv: '#eee95e'
            },
            onRegionClick: function(element, code, region)
                {
                    event.preventDefault();
                }

        });
    });
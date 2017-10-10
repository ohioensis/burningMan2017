webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	jQuery(document).ready(function () {
	    jQuery('#vmap').vectorMap({
	        map: 'usa_en',
	        backgroundColor: '#a5bfdd',
	        borderColor: '#818181',
	        borderOpacity: 0.25,
	        borderWidth: 1,
	        color: '#f4f3f0',
	        enableZoom: true,
	        hoverColor: '#c9dfaf',
	        hoverOpacity: null,
	        normalizeFunction: 'linear',
	        scaleColors: ['#b6d6ff', '#005ace'],
	        selectedColor: '#c9dfaf',
	        selectedRegions: null,
	        showTooltip: true,
	        onRegionClick: function onRegionClick(element, code, region) {
	            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
	
	            alert(message);
	        }
	
	    });
	});

/***/ })
])
//# sourceMappingURL=0.f38c885bccd7de1a799b.hot-update.js.map
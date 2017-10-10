webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	  $('#vmap').vectorMap({
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
//# sourceMappingURL=0.1a69d4744470f3ac91fc.hot-update.js.map
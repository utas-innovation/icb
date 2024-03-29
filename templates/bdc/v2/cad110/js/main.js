require.config({
	paths: {
		'common': 'https://dementia.health.utas.edu.au/templates/bdc/v2/common/js/main',
		'domReady': 'https://dementia.health.utas.edu.au/templates/common/vendor/requirejs/2.1.11/domReady',
		'jquery': ["https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min", 'https://dementia.health.utas.edu.au/templates/common/vendor/jquery-1.10.2.min'],
        'plugins': 'https://dementia.health.utas.edu.au/templates/common/js/plugins'
	},

	waitSeconds: 600, //default is 7
	deps: ['common'] //load asap
});

require(['jquery','domReady', 'plugins'], function ($, domReady) {
	console.debug("main-cad110 running");

});
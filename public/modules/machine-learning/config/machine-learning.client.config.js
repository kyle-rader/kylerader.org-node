'use strict';

// Configuring the CoolThings module
angular.module('machine-learning').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Machine Learning', 'ml', '', '/ml', true);
	}
]);

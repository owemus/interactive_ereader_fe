/* global angular */

(function() {
	
	'use strict';
	
	angular.module('booksManager', ['ui.router', 'dashboard', 'users', 'books', 'roles', 'subjects', 'publishers', 'languages', 'stats']);
	
	angular.module('dashboard', []);
	angular.module('users', []);
	angular.module('books', []);
	angular.module('roles', []);
	angular.module('subjects', []);
	angular.module('publishers', []);
	angular.module('languages', []);
	angular.module('stats', []);
	
})();
/* global angular */
/* global $ */

(function() {
	
	'use strict';
	
	angular.module('booksManager')
	
	.controller('SidebarController', ['$scope', '$http', function($scope, $http) {
		$scope.sidebarClass = 'sidebar-container';
		
		$scope.sidebarNavigation =
		[
			{
				"value":"Dashboard",
				"icon":"dashboard",
				"href":"#/dashboard",
				"sub":false,
				"expand":{
					"value":false
				}
			},
			{
				"value":"Statistics",
				"icon":"assessment",
				"href":"#/stats",
				"sub":false,
				"expand":{
					"value":false
				}
			},
			{
				"value":"Users",
				"icon":"group",
				"sub":true,
				"expand": {
					"value":true,
					"status":false
				},
				"additional":[
					{
						"value":"Roles",
						"icon":"recent_actors",
						"href":"#/roles"
					},
					{
						"value":"Users",
						"icon":"local_library",
						"href":"#/users"
					}
				],
				"href": "#"
			},
			{
				"value":"Books",
				"icon":"book",
				"sub":true,
				"expand": {
					"value":true,
					"status":false
				},
				"additional":[
					{
						"value":"Books",
						"icon":"library_books",
						"href":"#/books"
					},
					{
						"value": "Types",
						"icon":"chrome_reader_mode",
						"href":"#/booktypes"
					},
					{
						"value":"Publishers",
						"icon":"domain",
						"href":"#/publishers"
					},
					{
						"value":"Subjects",
						"icon":"subject",
						"href":"#/subjects"
					}
				],
				"href": "#"
			},
			{
				"value":"Languages",
				"icon":"language",
				"href":"#/languages",
				"sub":false,
				"expand": {
					"value":false
				}
			}
		];
		
		$scope.expand = function() {
			var target = $scope.sidebarNavigation[$scope.sidebarNavigation.indexOf($(this)[0].item)];
			
			if(target.sub) {
				target.sub = false;
				target.expand.status = true;
			}
			else {
				target.sub = true;
				target.expand.status = false;
			}
		}
		
		$scope.toggleSidebar = function() {
			if($scope.sidebarClass == 'sidebar-container sidebar-hidden') {
				$scope.sidebarClass = 'sidebar-container';
			}
			else {
				$scope.sidebarClass = 'sidebar-container sidebar-hidden';
			}
		}
		
	}])
	
})();
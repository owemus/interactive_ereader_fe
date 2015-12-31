/* global angular */
/* global app_utils */

(function() {
	
	'use strict';
	
	angular.module('roles')
	
	.controller('RolesListController', ['$scope', '$http', function($scope, $http) {
		
		$scope.roles = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'userroles',
			method: 'GET'
		}).then(function success(response) {
			$scope.roles = response.data.data;
		}, function error(response) {
			alert('An error has occured, please contact support.');	
		})
		
		$scope.deleteContent = function() {
			var target = $(this)[0].role;
			$scope.roles.splice($scope.roles.indexOf(target), 1);

			$http({
				url: app_utils.api_url+'userroles/'+target.id,
				method: 'DELETE'
			}).then(function success(response) {
				if(response.data.success) {
					alert('Successfully deleted user role.');
				}
				else {
					alert('Error: '+response.data.error_message);
				}
			}, function error(response) {
				alert('An error has occured, please contact support.');
			})
		}
		
	}])
	
})();
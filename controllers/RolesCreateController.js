/* global angular */
/* global app_utils */

(function() {
	
	'use strict';
	
	angular.module('roles')
	
	.controller('RolesCreateController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		$scope.roles = {
			'name':''
		}
		
		$scope.submitRoles = function() {
			if($scope.roles.name.length > 0) {
				$http({
					url: app_utils.api_url+'userroles',
					method: 'POST',
					data: $scope.roles
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully created a new user.');
						$location.path('/roles');
					}
					else if(!response.data.success) {
						alert('Error: '+response.data.error_message);
					}
				}, function error(response) {
					alert('An error has occured, please contact the support.');
				})
			}
			else {
				alert('Please enter something before creating');
			}
		}
		
	}])
	
})();
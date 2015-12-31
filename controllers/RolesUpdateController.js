/* global angular */
/* global app_utils */

(function() {
	
	'use strict';
	
	angular.module('roles')
	
	.controller('RolesUpdateController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
		
		$scope.roles = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'userroles/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.roles = response.data.data;
				
				$scope.submitRoles = function() {
					if($scope.roles.name.length > 0) {
						$http({
							url: app_utils.api_url+'userroles/'+$stateParams.id,
							method: 'PUT',
							data: $scope.roles
						}).then(function success(response) {
							if(response.data.success) {
								alert('Successfully updated user role.');
								$location.path('/roles');
							}
							else {
								alert('Error: '+response.data.error_message);
							}
						}, function error(response) {
							alert('An error has occured, please contact support.');
						})
					}
				}
				
			}
			else {
				alert('Error: '+response.data.error_message);
			}
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
	}])
	
})();
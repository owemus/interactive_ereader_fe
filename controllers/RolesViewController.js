/* global angular */
/* global app_utils */

(function(){
	
	'use strict';
	
	angular.module('roles')
	
	.controller('RolesViewController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
		
		$scope.roles = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'userroles/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.data) {
				$scope.roles = response.data.data;
			}
			else {
				alert('Error: '+response.data.error_message);
			}
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
	}])
	
})();
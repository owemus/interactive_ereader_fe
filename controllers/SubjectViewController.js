/* global angular */

(function() {
	
	'use strict';
	
	angular.module('subjects')
	
	.controller('SubjectViewController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
		
		$scope.subjects = {
			'name': ''
		};
		
		$http({
			url: app_utils.api_url+'subjects/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.subjects = response.data.data;
			}
			else {
				alert('Error: '+response.data.error_message);
			}
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
	}])
	
})();
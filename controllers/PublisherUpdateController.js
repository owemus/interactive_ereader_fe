/* global angular */

(function() {
	
	'use strict';
	
	angular.module('publishers')
	
	.controller('PublisherUpdateController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
		$scope.publishers = {
			'name': ''
		};
		
		$http({
			url: app_utils.api_url+'publishers/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.publishers = response.data.data;
				
				$scope.submitPublishers = function() {
					if($scope.publishers.name.length > 0) {
						$http({
							url: app_utils.api_url+'publishers/'+$stateParams.id,
							method: 'PUT',
							data: $scope.publishers
						}).then(function success(response) {
							if(response.data.success) {
								alert('Successfully updated publisher.');
								$location.path('/publishers');
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
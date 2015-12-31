/* global angular */

(function() {
	
	'use strict';
	
	angular.module('publishers')
	
	.controller('PublisherCreateController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		
		$scope.publishers = {
			'name':''
		};
		
		$scope.submitPublishers = function() {
			console.log($scope.publishers.name.length, $scope.publishers.name);
			if($scope.publishers.name.length > 0) {
				$http({
					url: app_utils.api_url+'publishers',
					method: 'POST',
					data: $scope.publishers
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully created a publisher.');
						$location.path('/publishers');
					}
					else {
						alert('Error: '+response.data.error_message);
					}
				}, function error(response) {
					alert('An error has occured, please contact support.');
				})
			}
			else {
				alert('Please enter something before creating.');
			}
		}
		
	}])
	
})();
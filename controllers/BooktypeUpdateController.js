/* global angular */

(function() {
	
	'use strict';
	
	angular.module('books')
	
	.controller('BooktypeUpdateController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
		
		$scope.booktypes = {
			'name': ''
		};
		
		$http({
			url: app_utils.api_url+'booktypes/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.booktypes = response.data.data;
				
				$scope.submitBooktype = function() {
					if($scope.booktypes.name.length > 0) {
						$http({
							url: app_utils.api_url+'booktypes/'+$stateParams.id,
							method: 'PUT',
							data: $scope.booktypes
						}).then(function success(response) {
							if(response.data.success) {
								alert('Successfully updated book type.');
								$location.path('/booktypes');
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
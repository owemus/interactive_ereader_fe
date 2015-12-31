/* global angular */

(function() {
	
	'use strict';
	
	angular.module('books')
	
	.controller('BooktypeCreateController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		
		$scope.booktypes = {
			'name': ''
		};
		
		$scope.submitBooktype = function() {
			if($scope.booktypes.name.length > 0) {
				$http({
					url: app_utils.api_url+'booktypes',
					method: 'POST',
					data: $scope.booktypes
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully created a book type.');
						$location.path('/booktypes');
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
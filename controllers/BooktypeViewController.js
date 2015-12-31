/* global angular */

(function() {
	
	'use strict';
	
	angular.module('books')
	
	.controller('BooktypeViewController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
		
		$scope.booktypes = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'booktypes/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.booktypes = response.data.data;
			}
			else {
				alert('Error: '+response.data.error_message);
			}
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
		
	}])
	
})();
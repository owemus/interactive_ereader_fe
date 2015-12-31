/* global angular */
/* global app_utils */

(function() {
	
	'use strict';
	
	angular.module('publishers')
	
	.controller('PublisherViewController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
		
		$scope.publishers = {
			'name':''	
		};
		
		$http({
			url: app_utils.api_url+'publishers/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.publishers = response.data.data;
			}
			else {
				alert('Error: '+response.data.error_message);
			}
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
	}])
	
})();
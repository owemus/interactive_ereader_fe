/* global angular */

(function() {
	
	'use strict';
	
	angular.module('publishers')
	
	.controller('PublisherListController', ['$scope', '$http', function($scope, $http) {
		
		$scope.publishers = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'publishers',
			method: 'GET'
		}).then(function success(response) {
			$scope.publishers = response.data.data;
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
		$scope.deleteContent = function() {
			var target = $(this)[0].publisher;
			$scope.publishers.splice($scope.publishers.indexOf(target), 1);

			$http({
				url: app_utils.api_url+'publishers/'+target.id,
				method: 'DELETE'
			}).then(function success(response) {
				if(response.data.success) {
					alert('Successfully deleted publisher.');
				}
				else {
					alert('Error: '+response.data.error_message);
				}
			}, function error(response) {
				alert('An error has occured, please contact support.');
			})
		}
		
	}])
	
})();
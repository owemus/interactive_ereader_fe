/* global angular */

(function() {
	
	'use strict';
	
	angular.module('books')
	
	.controller('BooktypeListController', ['$scope', '$http', function($scope, $http) {
		
		$scope.booktypes = {
			'name':''
		};
		
		$http({
			url:app_utils.api_url+'booktypes',
			method: 'GET'
		}).then(function success(response) {
			$scope.booktypes = response.data.data;
		}, function error(response) {
			alert('An error has occured, please contact support for details.');
		})
		
		$scope.deleteContent = function() {
			var target = $(this)[0].booktype;
			
			$http({
				url: app_utils.api_url+'booktypes/'+target.id,
				method: 'DELETE'
			}).then(function success(response) {
				if(response.data.success) {
					$scope.booktypes.splice($scope.booktypes.indexOf(target), 1);
					alert('Successfully deleted book type.');
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
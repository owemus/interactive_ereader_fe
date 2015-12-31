/* global angular */

(function() {
	
	'use strict';
	
	angular.module('subjects')
	
	.controller('SubjectListController', ['$scope', '$http', function($scope, $http) {
		
		$scope.subjects = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'subjects',
			method: 'GET'
		}).then(function success(response) {
			$scope.subjects = response.data.data;
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
		$scope.deleteContent = function() {
			var target = $(this)[0].subject;
			
			$http({
				url: app_utils.api_url+'subjects/'+target.id,
				method: 'DELETE'
			}).then(function success(response) {
				if(response.data.success) {
					$scope.subjects.splice($scope.subjects.indexOf(target), 1);
					alert('Successfully deleted user');
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
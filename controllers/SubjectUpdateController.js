/* global angular */

(function() {
	
	'use strict';
	
	angular.module('subjects')
	
	.controller('SubjectUpdateController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
		
		$scope.subjects = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'subjects/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.subjects = response.data.data;
				
				$scope.submitSubjects = function() {
					if($scope.subjects.name.length > 0) {
						$http({
							url: app_utils.api_url+'subjects/'+$stateParams.id,
							method: 'PUT',
							data: $scope.subjects
						}).then(function success(response) {
							if(response.data.success) {
								alert('Successfully updated subject.');
								$location.path('/subjects');
							}
							else {
								alert('Error: '+response.data.error_message);
							}
						}, function error(response) {
							alert('An error has occured, please contact support.');							
						})
					}
					else {
						alert('Make sure you have something filled in.');
					}
				}
				
			}
			else {
				alert('Error: '+response.data.error_message);
			}
		}, function error(response) {
			alert('An error has occured, please contact support');
		})
		
	}])
	
})();
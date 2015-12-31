/* global angular */

(function() {
	
	'use strict';
	
	angular.module('languages')
	
	.controller('LanguageUpdateController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
		
		$scope.languages = {
			'name': ''
		};
		
		$http({
			url: app_utils.api_url+'languages/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.languages = response.data.data;
				
				$scope.submitLanguage = function() {
					if($scope.languages.name.length > 0) {
						$http({
							url: app_utils.api_url+'languages/'+$stateParams.id,
							method: 'PUT',
							data: $scope.languages
						}).then(function success(response) {
							if(response.data.success) {
								alert('Successfully updated language.');
								$location.path('/languages');
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
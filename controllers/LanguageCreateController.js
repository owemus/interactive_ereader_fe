/* global angular */

(function () {
	
	'use strict';
	
	angular.module('languages')
	
	.controller('LanguageCreateController', ['$scope', '$http' ,'$location', function($scope, $http, $location) {
		
		$scope.languages = {
			'name':''
		};
		
		$scope.submitLanguage = function() {
			if($scope.languages.name.length > 0) {
				$http({
					url: app_utils.api_url+'languages',
					method: 'POST',
					data: $scope.languages
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully created language.');
						$location.path('/languages');
					}
					else {
						alert('Error: '+response.data.error_message)
					}
				}, function error(response) {
					alert('An error has occured, please contact support');
				})
			}
			else {
				alert('Please enter something before creating.');
			}
		}
		
	}])
	
})();
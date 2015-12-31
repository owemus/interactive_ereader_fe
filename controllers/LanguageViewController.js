/* global angular */

(function() {
	
	'use strict';
	
	angular.module('languages')
	
	.controller('LanguageViewController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
		
		$scope.languages = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'languages/'+$stateParams.id,
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.languages = response.data.data;
			}
			else {
				alert('Error: '+response.data.error_message);
			}
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
	}])
	
})();
/* global angular */
/* global app_utils */
/* global $ */

(function() {
	
	'use strict';
	
	angular.module('languages')
	
	.controller('LanguageListController', ['$scope', '$http', function($scope, $http) {
		
		$scope.languages = {
			'name':''
		};
		
		$http({
			url: app_utils.api_url+'languages',
			method: 'GET'
		}).then(function success(response) {
			$scope.languages = response.data.data;	
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
		$scope.deleteContent = function() {
			var target = $(this)[0].language;
			
			$http({
				url: app_utils.api_url+'languages/'+target.id,
				method: 'DELETE'
			}).then(function success(response) {
				if(response.data.success) {
					alert('Successfully deleted language.');
					$scope.langages.splice($scope.languages.indexOf(target), 0);
				}
				else {
					alert('Error: '+response.data.error_message);
				}
			}, function error(response){
				alert('An error has occured, please contact support.');
			})
		}
		
	}])
	
})();
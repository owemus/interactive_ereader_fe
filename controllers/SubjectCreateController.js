/* global angular */

(function() {
	
	'use strict';
	
	angular.module('subjects')
	
	.controller('SubjectCreateController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		
		$scope.subjects = {
			'name':''
		};
		
		$scope.submitSubjects = function() {
			if($scope.subjects.name.length > 0) {
				$http({
					url: app_utils.api_url+'subjects',
					method: 'POST',
					data: $scope.subjects
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully create subject.');
						$location.path('/subjects');
					}
					else {
						alert('Error: '+response.data.error_message);
					}
				})
			}
			else {
				alert('Please enter something before creating.');
			}
		}
		
	}])
	
})();
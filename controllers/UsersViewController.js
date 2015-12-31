/* global angular */

(function() {
	
	angular.module('users')
	
	.controller('UsersViewController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
		var id = $stateParams.id;
		
		$scope.users = {};
		
		$http({
			url: app_utils.api_url+'userroles',
			method: 'GET'
		}).then(function success(response) {
			$scope.user_roles = response.data.data;
			
			$http({
				url: app_utils.api_url+'users/'+id,
				method: 'GET'
			}).then(function success(response) {
				if(response.data.success) {
					$scope.users = response.data.data;
					$scope.users.dob = new Date(response.data.data.dob);
				}
				else if(!response.data.success) {
					alert('Error: '+response.data.error_message);
				}
			})
			
		}, function error(response) {
			alert('An error has occured, contact support for details.');
		})
	}])
	
})();
/* global angular */
/* global app_utils */

(function() {
	
	angular.module('users')
	
	.controller('UsersCreateController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		
		$scope.user_roles = {};
		
		$scope.users = {
			'first_name': '',
			'last_name': '',
			'email': '',
			'gender': 'gender',
			'dob': new Date('01/01/1900'),
			'user_role_id': 'role'
		};
		
		$http({
			url: app_utils.api_url+'userroles',
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {		
				$scope.user_roles = response.data.data;
			}
			else {
				alert('Error: '+response.data.error_message);
				$location.path('/roles');
			}
		}, function error(response) {
			alert('An error has occured, check the console for more details.');
		})
		
		$scope.submitUsers = function() {
			
			if($scope.users.first_name.length > 0 && $scope.users.last_name.length > 0 && $scope.users.email.length > 0 && $scope.users.gender != "gender" && $scope.users.dob.length > 0 && $scope.users.user_role_id != 0) {
				
				$http({
					url: app_utils.api_url+'users',
					method: 'POST',
					data: $scope.users
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully created a new user.');
						$location.path('/users');
					}
					else if(!response.data.success) {
						alert('Error: '+response.data.error_message);
					}
				}, function error(response) {
					alert('An error has occured, please contact the support.');
				})
				
			}
			else {
				alert('Please make sure you have everything filled.');
			}
			
		}
		
	}])
	
})();
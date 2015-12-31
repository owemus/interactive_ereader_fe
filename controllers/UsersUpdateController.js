/* global angular */

(function() {
	
	angular.module('users')
	
	.controller('UsersUpdateController', ['$scope', '$http', '$stateParams', '$location', function($scope, $http, $stateParams, $location) {
		
		var id = $stateParams.id;
		
		$scope.user_roles = {};
		
		$scope.users = {
			'first_name': '',
			'last_name': '',
			'email': '',
			'gender': 'gender',
			'dob': new Date('00/00/0000'),
			'user_role_id': 'role'
		};
		
		$scope.submitUsers = function() {
			
			if(	$scope.users.first_name.length > 0 &&
				$scope.users.last_name.length > 0 &&
				$scope.users.email.length > 0 &&
				$scope.users.gender != "gender" &&
				$scope.users.dob != "00/00/0000" &&
				$scope.users.user_role_id != 0	) {
				
				$http({
					url: app_utils.api_url+'users/'+id,
					method: 'PUT',
					data: $scope.users
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully updated the user.');
						$location.path('/users');
					}
					else {
						alert('Error: '+response.data.error_message);
					}
				}, function error(response) {
					alert('An error has occured, please contact the support.');
				})
				
			}
			
		}
		
		$http({
			url: app_utils.api_url+'userroles',
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.user_roles = response.data.data;
				
				$http({
					url: app_utils.api_url+'users/'+id,
					method: 'GET'
				}).then(function success(response) {
					$scope.users = response.data.data;
					$scope.users.dob = new Date(response.data.data.dob);
				})
			}
			else {
				alert('Error: '+response.data.error_message);
			}
			
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
	}])
	
})();
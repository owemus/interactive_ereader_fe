/* global angular */

(function() {
	
	angular.module('users')
	
	.controller('UsersListController', ['$scope', '$http', function($scope, $http) {
		$scope.users = [];
		
		$http({
			url: app_utils.api_url+'users',
			method: 'GET'
		}).then(function success(response) {
			$scope.users = response.data.data;
		}, function error(response) {
			alert('An error has occured, please contact support.');
		})
		
		$scope.deleteContent = function() {
			
			var user =$(this)[0].user;
			
			$http({
				url: app_utils.api_url+'users/'+user.id,
				method: 'DELETE'
			}).then(function success(response) {
				if(response.data.success) {
					alert('Successfully deleted the user.');
					var offset = $scope.users.indexOf(user);
					$scope.users.splice(offset, 1);
				}
				else if(!response.data.success) {
					alert('Error: '+response.data.error_message);
				}
			}, function error(response) {
				alert('An error has occured, please contact support.');
			})
			
		}
		
	}])
	
})();
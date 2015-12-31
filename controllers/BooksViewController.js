/* global angular */

(function() {
	
	'use strict';
	
	angular.module('books')
	
	.controller('BooksViewController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
		
		$scope.books = {}
		$scope.chapters = [];
		
		$scope.page_choice = 'book';
		
		$http({
			url: app_utils.api_url+'languages',
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.languages = response.data.data;
				
				// getting publishers
				
				$http({
					url: app_utils.api_url+'publishers',
					method: 'GET'
				}).then(function success(response) {
					if(response.data.success) {
						$scope.publishers = response.data.data;
						
						// getting subjects
						
						$http({
							url: app_utils.api_url+'subjects',
							method: 'GET'
						}).then(function success(response) {
							if(response.data.success) {
								$scope.subjects = response.data.data;
								
								// getting book types
								
								$http({
									url: app_utils.api_url+'booktypes',
									method: 'GET'
								}).then(function success(response) {
									if(response.data.success) {
										$scope.booktypes = response.data.data;
										
										$http({
											url:app_utils.api_url+'books/'+$stateParams.id,
											method: 'GET'
										}).then(function success(response) {
											if(response.data.success) {
												$scope.books = response.data.data;
												$scope.books.published = new Date(response.data.data.published);
												var chapters = response.data.data.chapters;
												for(var a = 0; a < chapters.length; a++) {
													$scope.chapters.push({'name':chapters[a].name, 'page_end':chapters[a].pages[chapters[a].pages.length - 1].page_no})		
												}
											}
											else {
												alert('Error: '+response.data.error_message);
											}
										}, function error(response) {
											alert('An error has occured, please contact support.');
										})
									}
									else {
										alert('Error: '+response.data.error_message);
									}
								}, function error(response) {
									alert('An error has occured, please contact support.');
								})
							}
							else {
								alert('Error: '+response.data.error_message);
							}
						}, function error(response) {
							alert('An error has occured, please contact support.');
						})
					}
					else {
						alert('Error: '+response.data.error_message);
					}
				}, function error(response) {
					alert('An error has occured, please contact support.');
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
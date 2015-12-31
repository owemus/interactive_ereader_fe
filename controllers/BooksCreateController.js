/* global angular */
/* global $ */

(function() {
	
	'use strict';
	
	angular.module('books')
	
	.controller('BooksCreateController', ['$scope', '$http', '$location', function($scope, $http, $location) {
		
		$scope.page_choice = 'book';
		
		$scope.chapters = [];
		
		$scope.addChapter = function()
		{
			$scope.chapters.push({name: '', page_end: 0});
		}
		
		$scope.books = {
			'isbn':'',
			'isbn-13':'',
			'book_type_id':'booktype',
			'title':'',
			'description':'',
			'language_id':'language',
			'subject_id':'subject',
			'publisher_id':'publisher',
			'published': new Date('01/01/1900'),
			'chapters': []
		};
		
		// getting book types
		
		$http({
			url: app_utils.api_url+'booktypes',
			method: 'GET'
		}).then(function success(response) {
			if(response.data.success) {
				$scope.booktypes = response.data.data;
				
				// getting subjects
				
				$http({
					url: app_utils.api_url+'subjects',
					method: 'GET'
				}).then(function success(response) {
					if(response.data.success) {
						$scope.subjects = response.data.data;
						
						// getting languages
						
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
										console.log('- Everything is filled.');
									}
									else {
										alert('Error: '+response.data.error_message);
									}
								})
							}
							else {
								alert('Error: '+response.data.error_message)
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
		
		$scope.submitBooks = function() {
			if($scope.books.title.length > 0 && $scope.books.isbn.length > 0 && $scope.books['isbn-13'].length > 0 && $scope.books.book_type_id != "booktype" && $scope.books.description.length > 0 && $scope.books.subject_id != "subject" && $scope.books.language_id != "language" && $scope.books.publisher_id != "publisher") 
			{
				var chapters = [];
				
				for(var a = 0; a < $scope.chapters.length; a++) {
					var temp = {name: $scope.chapters[a].name, pages: []};
					
					var j = (a == 0) ? 1 : $scope.chapters[a - 1].page_end + 1;
					
					for(j; j <= $scope.chapters[a].page_end; j++)
					{
						temp.pages.push({page_no: j});
					}
					
					chapters.push(temp);
				} 
				
				$scope.books.chapters = chapters;
				$http({
					url: app_utils.api_url+'books',
					method: 'POST',
					data: $scope.books
				}).then(function success(response) {
					if(response.data.success) {
						alert('Successfully created a book.');
						$location.path('/books');
					}
					else {
						alert('Error: '+response.data.error_message);
					}
				}, function error(response) {
					alert('An error has occured, please contact support.');
				})
				 
			}
			else {
				console.log($scope.books);
			}
		}
		
	}])
	
})();
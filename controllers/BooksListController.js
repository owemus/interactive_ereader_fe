/* global angular */

(function() {
	
	'use strict';
	
	angular.module('books')
	
	.controller('BooksListController', ['$scope', '$http', function($scope, $http) {
		
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
		
		$http({
			url: app_utils.api_url+'books',
			method: 'GET'
		}).then(function success(response) {
			$scope.books = response.data.data;
		})
		
		$scope.deleteContent = function() {
			var target = $(this)[0].book;
			$http({
				url: app_utils.api_url+'books/'+target.id,
				method: 'DELETE'
			}).then(function success(response) {
				if(response.data.success) {
					$scope.books.splice($scope.books.indexOf(target), 1);
					alert('Successfully deleted book.');
				}
				else {
					alert('Error: '+response.data.error_message);
				}
			}, function error(response) {
				alert('An error has occured, please contact support.');
			})
		}
		
	}])
	
})();
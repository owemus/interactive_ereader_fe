/* global angular */

(function() {
	
	'use strict';
	
	angular.module('booksManager')
	
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
		
		// Dashboard =>
		
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'views/dashboard/dashboard.html',
			controller: 'DashboardController',
		})
		
		// Stats =>
		
		.state('stats', {
			url: '/stats',
			templateUrl: 'views/stats/list.html',
			controller: 'StatsController'
		})
		
		// User Roles =>
		
		.state('roles', {
			url: '/roles',
			templateUrl: 'views/roles/list.html',
			controller: 'RolesListController'
		})
		.state('rolesCreate', {
			url: '/roles/create',
			templateUrl: 'views/roles/create.html',
			controller: 'RolesCreateController'
		})
		.state('rolesView', {
			url: '/roles/:id/view',
			templateUrl: 'views/roles/view.html',
			controller: 'RolesViewController'
		})
		.state('rolesUpdate', {
			url: '/roles/:id/update',
			templateUrl :'views/roles/update.html',
			controller: 'RolesUpdateController'
		})
		
		// Users =>
		
		.state('users', {
			url: '/users',
			templateUrl: 'views/users/list.html',
			controller: 'UsersListController'
		})
		.state('usersCreate', {
			url: '/users/create',
			templateUrl: 'views/users/create.html',
			controller: 'UsersCreateController'
		})
		.state('usersView', {
			url: '/users/:id/view',
			templateUrl: 'views/users/view.html',
			controller: 'UsersViewController'
		})
		.state('usersUpdate', {
			url: '/users/:id/update',
			templateUrl: 'views/users/update.html',
			controller: 'UsersUpdateController'
		})
		
		// Books =>
		
		.state('books', {
			url: '/books',
			templateUrl: 'views/books/list.html',
			controller: 'BooksListController'
		})
		.state('booksCreate', {
			url: '/books/create',
			templateUrl: 'views/books/create.html',
			controller: 'BooksCreateController'
		})
		.state('booksView', {
			url: '/books/:id/view',
			templateUrl: 'views/books/view.html',
			controller: 'BooksViewController'	
		})
		.state('booksUpdate', {
			url: '/books/:id/update',
			templateUrl: 'views/books/update.html',
			controller: 'BooksUpdateController'
		})
		
		// Publisher =>
		
		.state('publisher', {
			url: '/publishers',
			templateUrl: 'views/publisher/list.html',
			controller: 'PublisherListController'
		})
		.state('publisherCreate', {
			url: '/publishers/create',
			templateUrl: 'views/publisher/create.html',
			controller: 'PublisherCreateController'
		})
		.state('publisherView', {
			url: '/publishers/:id/view',
			templateUrl: 'views/publisher/view.html',
			controller: 'PublisherViewController'
		})
		.state('publisherUpdate', {
			url: '/publishers/:id/update',
			templateUrl: 'views/publisher/update.html',
			controller: 'PublisherUpdateController'
		})
		
		// Subjects =>
		
		.state('subject', {
			url: '/subjects',
			templateUrl: 'views/subject/list.html',
			controller: 'SubjectListController'
		})
		.state('subjectCreate', {
			url: '/subjects/create',
			templateUrl: 'views/subject/create.html',
			controller: 'SubjectCreateController'
		})
		.state('subjectView', {
			url: '/subjects/:id/view',
			templateUrl: 'views/subject/view.html',
			controller: 'SubjectViewController'
		})
		.state('subjectUpdate', {
			url: '/subjects/:id/update',
			templateUrl: 'views/subject/update.html',
			controller: 'SubjectUpdateController'
		})
		
		// Lanugages =>
		
		.state('language', {
			url: '/languages',
			templateUrl: 'views/language/list.html',
			controller: 'LanguageListController'
		})
		.state('languageCreate', {
			url: '/languages/create',
			templateUrl: 'views/language/create.html',
			controller: 'LanguageCreateController'
		})
		.state('languageView', {
			url: '/languages/:id/view',
			templateUrl: 'views/language/view.html',
			controller: 'LanguageViewController'
		})
		.state('languageUpdate', {
			url: '/languages/:id/update',
			templateUrl: 'views/language/update.html',
			controller: 'LanguageUpdateController'
		})
		
		// Book Types =>
		
		.state('booktype', {
			url: '/booktypes',
			templateUrl: 'views/booktype/list.html',
			controller: 'BooktypeListController'
		})
		.state('booktypeCreate', {
			url: '/booktypes/create',
			templateUrl: 'views/booktype/create.html',
			controller: 'BooktypeCreateController'
		})
		.state('booktypeView', {
			url: '/booktypes/:id/view',
			templateUrl: 'views/booktype/view.html',
			controller: 'BooktypeViewController'
		})
		.state('booktypeUpdate', {
			url: '/booktypes/:id/update',
			templateUrl: 'views/booktype/update.html',
			controller: 'BooktypeUpdateController'
		})
		
		$urlRouterProvider.otherwise('/dashboard');
		
	}]);
})();
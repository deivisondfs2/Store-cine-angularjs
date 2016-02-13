angular.module('store').config(function($routeProvider) {
	$routeProvider.when('/movies', {
		templateUrl: 'template/pages/movies/index.html',
	})

	.when('/', {

		templateUrl: 'template/pages/movies/index.html',
	})

	.otherwise({redirectTo: '/'});
});
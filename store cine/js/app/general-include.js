var app = angular.module('general-include', []);

app.directive('navbarDirective', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/directives/navbar-directive.html'
	};
});

app.directive('categoryCine', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/directives/categorycine-directive.html'
	};
});
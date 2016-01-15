var app = angular.module('store', []);

app.controller('ListMovies', function(){
	this.product = stock;

	this.getArrayNumber = function(num) {
		var array = [];
		for (var i = null; i < num; i++) {
			array.push(i);
		};
	   return array;   
	};
});


app.controller('PainelTabsController', function(){
	//set default 1
	//this.tab = 1;

	this.setTab = function(newTab){
		this.tab = newTab;
	};

	this.isTabSelected = function(tab){
		return this.tab == tab;
	};

});

app.controller('reviewsController', function(){
	this.reviewForm = {};

	this.addReviewMovie = function(movie){
		console.log(this.reviewForm);
		movie.reviews.push(this.reviewForm);
		this.reviewForm = {};
	};
});

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
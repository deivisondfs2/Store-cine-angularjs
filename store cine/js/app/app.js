var app = angular.module('store', ['ngRoute','general-include', 'store-panelTab']);

app.controller('ListMovies', ['$http' ,function($http){
	var stock = this;

	stock.product = [];

	$http.get('js/app/stock.json').success(function(data){
		stock.product = data;
	});

	this.getArrayNumber = function(num) {
		var array = [];
		for (var i = null; i < num; i++) {
			array.push(i);
		};
	   return array;   
	};
}]);


app.controller('reviewsController', function(){
	this.reviewForm = {};

	this.addReviewMovie = function(movie){
		console.log(this.reviewForm);
		movie.reviews.push(this.reviewForm);
		this.reviewForm = {};
	};
});


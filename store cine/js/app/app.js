var app = angular.module('store', []);

app.controller('ListMovies', function(){
	this.product = stock;
})


app.controller('PainelTabsController', function(){
	//set default 1
	//this.tab = 1;

	this.setTab = function(newTab){
		this.tab = newTab;
	}

	this.isTabSelected = function(tab){
		return this.tab == tab;
	}

})

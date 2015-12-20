
var stock = {
	name: "shirt",
	price: 27,
	description: "it's ok!"
}
var app = angular.module('store', []);

app.controller('ListProducts', function(){
	this.product = stock;
})


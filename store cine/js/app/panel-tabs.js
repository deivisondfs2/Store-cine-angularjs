var app = angular.module('store-panelTab', []);

app.directive('painelTabs', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/directives/painelTabs.html',

		controller: function(){
			//set default 1
			//this.tab = 1;

			this.setTab = function(newTab){
				this.tab = newTab;
			};

			this.isTabSelected = function(tab){
				return this.tab == tab;
			};
		},
		controllerAs: "painelTab"
	};
});
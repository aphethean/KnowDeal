angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $location, $http, $cordovaBarcodeScanner, PrivateAddressService) {
	console.log(typeof cordova == 'undefined') 

	$scope.login = function() {
//		alert("login")
		$location.path('/home.feed')
	}		

	
})

.controller('FeedCtrl', function($scope, $location) {
	console.log("FEED")
	
	$scope.feed = function() {
		$location.path('/home.feed');
	}	
	$scope.achievements = function() {
		$location.path('/home.achievements');
	}	
	$scope.opportunities = function() {
		$location.path('/home.opportunities');
	}	
	$scope.portfolio = function() {
		$location.path('/home.portfolio');
	}	

})

.controller('AchievementsCtrl', function($scope, $location) {
	console.log("ACHIEVEMENTS")

	$scope.feed = function() {
		$location.path('/home.feed')
	}	
	$scope.achievements = function() {
		$location.path('/home.achievements')
	}	
	$scope.opportunities = function() {
		$location.path('/home.opportunities')
	}	
	$scope.portfolio = function() {
		$location.path('/home.portfolio')
	}	

})

.controller('OpportunitiesCtrl', function($scope, $location) {
	console.log("OPPORTUNITIES")
	
	$scope.feed = function() {
		$location.path('/home.feed')
	}	
	$scope.achievements = function() {
		$location.path('/home.achievements')
	}	
	$scope.opportunities = function() {
		$location.path('/home.opportunities')
	}	
	$scope.portfolio = function() {
		$location.path('/home.portfolio')
	}	

})

.controller('PortfolioCtrl', function($scope, $location) {
	console.log("PORTFOLIO")
	
	$scope.feed = function() {
		$location.path('/home.feed')
	}	
	$scope.achievements = function() {
		$location.path('/home.achievements')
	}	
	$scope.opportunities = function() {
		$location.path('/home.opportunities')
	}	
	$scope.portfolio = function() {
		$location.path('/home.portfolio')
	}

});

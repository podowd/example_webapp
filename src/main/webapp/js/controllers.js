'use strict';

/* Controllers */


var app = angular.module('example.controllers', []);

app.controller('SearchCtrl', function($scope, searchService) {
	$scope.results = {};
	$scope.searchInProgress = false;
	
	$scope.search = function() {
		if ($scope.query === undefined || $scope.query.trim() ==='') {
			$scope.status = 'The search query can not be empty!';
			return;
		}
		$scope.status = 'Searching...';
		$scope.results = {};
		$scope.searchInProgress = true;
	
		searchService.search($scope.query).query(function(data) {
	    	$scope.results = data;
	    	$scope.status = '';
			$scope.searchInProgress = false;
			if ($scope.results.length == 0) {
				$scope.status = 'No results matching search query' 
			}
		}, function(error) {
			$scope.results = {};
	    	$scope.status = 'Error occurred performing search, if the problem persists contact IT support';
			$scope.searchInProgress = false;
		});
	};
});
'use strict';

/* Services */
var app = angular.module('example.services', ['ngResource']);

app.service('searchService', function($q, $resource) {
    this.search = function (query) {
	    var r =  $resource('/example/rest/search/'+query, {}, {
	        query: 
	        { 	method: 'GET', 
	        	isArray: true	
	        }
	    });
		return r;
    };
});
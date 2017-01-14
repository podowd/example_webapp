'use strict';

// Declare app level module which depends on filters, and services
angular.module('example', ['example.filters', 'example.services', 'example.directives', 'example.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: 'SearchCtrl'});
        $routeProvider.otherwise({redirectTo: '/search'});
    }]);

'use strict';


// Declare app level module which depends on filters, and services
angular.module('photos', ['photos.filters', 'photos.services', 'photos.directives', 'photos.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'MainCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

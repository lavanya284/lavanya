 angular.module("dyw",['ngRoute','angular-rating'])
 .config(function($routeProvider) {
     $routeProvider
        .when('/', {
          templateUrl: 'views/enterpage.html',
          controller: 'HomeController'
        })
        .when('/MainPage', {
          templateUrl: 'views/mainpage.html',
          controller: 'MainController'
         })
         .when('/AllItems', {
          templateUrl: 'views/allitems.html',
          controller: 'AllController'
         })
        .otherwise({
          redirectTo: '/'
        });
 });
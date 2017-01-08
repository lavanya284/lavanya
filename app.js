 angular.module("dyw",['ngRoute'])
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
        .otherwise({
          redirectTo: '/'
        });
 });
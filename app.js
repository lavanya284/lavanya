 angular.module("dyw",['angular-rating','ui.router','angular.filter'])
 .config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('home');
   $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/enterpage.html",
      controller: "HomeController"
    })
    .state('MainPage', {
      url: "/MainPage",
      templateUrl: "views/mainpage.html",
      controller: "MainController"
    })
    .state('AllItems', {
      url: "/AllItems",
      templateUrl: "views/allitems.html",
      controller: 'AllController'
    })
    .state('ItemDetail', {
      url: "/ItemDetail",
      templateUrl: "views/itemdetail.html",
      controller: "ItemDetailController"
    })
    .state('Cartpage', {
      url: "/Cartpage",
      templateUrl: "views/Cartpage.html",
      controller: "CartpageController"
    })
 }); 


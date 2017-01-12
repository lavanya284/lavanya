angular.module('dyw')
  .controller('MainController',function($scope,$location,displayCond) {
    'use strict';
     $scope.imgURL = '/public/pic8.jpg';
     $scope.itemspage = function(path,catstring){
       $location.path(path);
       displayCond.setCatString(catstring);
     };
  });

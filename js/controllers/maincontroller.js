angular.module('dyw')
  .controller('MainController',function($scope,$location,displayCond) {
    'use strict';
     $scope.imgURL = '/public/pic8.jpg';
     $scope.itemspage = function(catstring,typeOfCat){
     displayCond.setCatString(catstring);
     displayCond.setCatType(typeOfCat);
     };
  });

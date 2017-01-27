angular.module('dyw')
  .controller('ItemDetailController',function($scope,$location,displayCond) {
    'use strict';
     $scope.imgURL = '/public/pic8.jpg';
     $scope.imgdata=displayCond.getAllData();
     $scope.prheading=$scope.imgdata.name;
     $scope.addtocart=function(Cartitem){
     displayCond.setcartData(Cartitem);
     displayCond.setcartlength(displayCond.getcartData().length);
    }
  });
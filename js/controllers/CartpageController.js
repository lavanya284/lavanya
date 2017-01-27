angular.module('dyw')
  .controller('CartpageController',function($scope,displayCond) {
    'use strict';
     $scope.imgURL = '/public/pic8.jpg';
     $scope.cart_data=displayCond.getcartData();
     console.log($scope.cart_data+"csdcsdcsdcsd");
  });
angular.module('dyw')
  .controller('navbarController',function($scope,displayCond) {
    'use strict';
    $scope.$watch(function() {return displayCond.getcartlength();},
              function(cartvalue) {$scope.cartlen=cartvalue;}
             );
     
    console.log($scope.cartlen+"in nav");
  });
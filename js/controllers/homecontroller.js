angular.module('dyw')
  .controller('HomeController',function($scope,$location) {
    'use strict';
    $scope.toEnter=false;
    $scope.imgURL = '/public/pic1.jpg';
    $scope.homepage = function(path){
        $scope.toEnter=true;
        $location.path(path);
     };
    
  });

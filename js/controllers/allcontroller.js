angular.module('dyw')
  .controller('AllController',function($scope,$location,displayCond) {
    'use strict';
     $scope.imgURL = '/public/pic8.jpg';
     $scope.sort = function(keyname){
     $scope.sortKey=keyname;
     $scope.reverse=!$scope.reverse;
     }
     
     $scope.catshow=function(showitem){
       console.log(displayCond.getCatString()+" cscscscs"+showitem);
       if(showitem==displayCond.getCatString()){
         console.log('in if');
         return true;
       }else{
         return false;
       }
     }
    $scope.allItemImages=[{
      "url":"\\public\\pic31.jpg",
      "name":"ex1",
      "price":1100,
      "type":"exbox",
      "occassion":'birthday',
      "relation":'love',
      "range":'under2000',
      "ratings":4,
      "time":10
    },{
      "url":"\\public\\pic32.jpg",
      "name":"ex2",
      "price":550,
      "type":"exbox",
      "occassion":'marraige',
      "relation":'love',
      "range":'under1000',
      "ratings":4,
      "time":10
    },{
      "url":"\\public\\pic33.jpg",
      "name":"ex3",
      "price":2200,
      "type":"exbox",
      "occassion":'birthday',
      "relation":'siblings',
      "range":'under5000',
      "ratings":4,
      "time":10
    },{
      "url":"\\public\\pic34.jpg",
      "name":"ex4",
      "price":5000,
      "type":"exbox",
      "occassion":'aniversary',
      "relation":'parents',
      "range":'under5000',
      "ratings":4,
      "time":15
    },{
      "url":"\\public\\pic35.jpg",
      "name":"ex5",
      "price":450,
      "type":"exbox",
      "occassion":'aniversary',
      "relation":'parents',
      "range":'under500',
      "ratings":4,
      "time":7
    },{
      "url":"\\public\\pic36.jpg",
      "name":"ex1",
      "price":1100,
      "type":"grecard",
      "occassion":'birthday',
      "relation":'love',
      "range":'under2000',
      "ratings":4,
      "time":5
    },{
      "url":"\\public\\pic37.jpg",
      "name":"ex2",
      "price":550,
      "type":"grecard",
      "occassion":'aniversary',
      "relation":'parents',
      "range":'under1000',
      "ratings":4,
      "time":5
    }];
 })
  
angular.module('dyw')
  .controller('AllController',function($scope,$location,displayCond) {
    'use strict';
     $scope.imgURL = '/public/pic8.jpg';
     $scope.sort = function(keyname){
     $scope.sortKey=keyname;
     $scope.reverse=!$scope.reverse;
     }
     $scope.itemdetail = function(imagedetail){
     $scope.itemnewdata=imagedetail;
     console.log($scope.itemnewdata+"edcvdsvsdfvsdfv");
     displayCond.setAllData($scope.itemnewdata);
     };
     $scope.catshow=displayCond.getCatString();
     $scope.catType=displayCond.getCatType();
     $scope.allItemImages=[{
      "id":1,
      "url":"\\public\\pic31.jpg",
      "name":"Birthday Exploding Box",
      "price":1100,
      "type":"exbox",
      "occassion":'birthday',
      "relation":'love',
      "range":'under2000',
      "ratings":4,
      "time":10,
      "desc":"Explosion box explode when one opens it with lots of photographs and quotes along with a cake in between Maximum 35 images can be adjusted Gift your loves ones they will definitely like it Email your images at info @awwsme.com with order no."

    },{
      "id":2,
      "url":"\\public\\pic32.jpg",
      "name":"Marraige Exploding Box",
      "price":550,
      "type":"exbox",
      "occassion":'marraige',
      "relation":'friends',
      "range":'under1000',
      "ratings":4,
      "time":10,
      "desc":"Explosion box explode when one opens it with lots of photographs and quotes along with a cake in between Maximum 35 images can be adjusted Gift your loves ones they will definitely like it Email your images at info @awwsme.com with order no."

    },{
      "id":3,
      "url":"\\public\\pic33.jpg",
      "name":"Birthday Exploding Box for siblings",
      "price":2200,
      "type":"exbox",
      "occassion":'birthday',
      "relation":'siblings',
      "range":'under5000',
      "ratings":4,
      "time":10,
      "desc":"Explosion box explode when one opens it with lots of photographs and quotes along with a cake in between Maximum 35 images can be adjusted Gift your loves ones they will definitely like it Email your images at info @awwsme.com with order no."
    },{
      "id":4,
      "url":"\\public\\pic34.jpg",
      "name":"Aniversary Exploding Box",
      "price":5000,
      "type":"exbox",
      "occassion":'aniversary',
      "relation":'parents',
      "range":'under5000',
      "ratings":4,
      "time":15,
      "desc":"Explosion box explode when one opens it with lots of photographs and quotes along with a cake in between Maximum 35 images can be adjusted Gift your loves ones they will definitely like it Email your images at info @awwsme.com with order no."
    },{
      "id":5,
      "url":"\\public\\pic35.jpg",
      "name":"Aniversary Exploding Box",
      "price":450,
      "type":"exbox",
      "occassion":'aniversary',
      "relation":'parents',
      "range":'under500',
      "ratings":4,
      "time":7,
      "desc":"Explosion box explode when one opens it with lots of photographs and quotes along with a cake in between Maximum 35 images can be adjusted Gift your loves ones they will definitely like it Email your images at info @awwsme.com with order no."
    },{
      "id":6,
      "url":"\\public\\pic36.jpg",
      "name":"Birthday Greeting Card",
      "price":1100,
      "type":"grecard",
      "occassion":'birthday',
      "relation":'love',
      "range":'under2000',
      "ratings":4,
      "time":5,
      "desc":"Explosion box explode when one opens it with lots of photographs and quotes along with a cake in between Maximum 35 images can be adjusted Gift your loves ones they will definitely like it Email your images at info @awwsme.com with order no."
    },{
      "id":7,
      "url":"\\public\\pic37.jpg",
      "name":"Aniversary Greeting Card",
      "price":550,
      "type":"grecard",
      "occassion":'aniversary',
      "relation":'parents',
      "range":'under1000',
      "ratings":4,
      "time":5,
      "desc":"Explosion box explode when one opens it with lots of photographs and quotes along with a cake in between Maximum 35 images can be adjusted Gift your loves ones they will definitely like it Email your images at info @awwsme.com with order no."
    }];
   
  })
  
angular.module('dyw')
  .factory('displayCond', function() {
     var discondfactory={};
     discondfactory.catstring='';
     discondfactory.setCatString=function(catName){
         discondfactory.catstring=catName;
     };
     discondfactory.getCatString=function(){
         return discondfactory.catstring;
     };
     return discondfactory;
  });
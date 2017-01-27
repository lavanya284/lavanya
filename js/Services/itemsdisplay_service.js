angular.module('dyw')
  .factory('displayCond', function() {
     var discondfactory={};
     discondfactory.catstring='';
     discondfactory.cattype='';
      discondfactory.totdata='';
      discondfactory.cartdata=[];
      discondfactory.cartlength='';
     
     discondfactory.setCatString=function(catName){
         discondfactory.catstring=catName;
     };
     discondfactory.setCatType=function(catType){
         discondfactory.cattype=catType;
     };
     discondfactory.getCatString=function(){
         return discondfactory.catstring;
     };
     discondfactory.getCatType=function(){
         return discondfactory.cattype;
     };
      discondfactory.getAllData=function(){
         return discondfactory.totdata;
     };
     discondfactory.setAllData=function(data){
         discondfactory.totdata=data;
     };
      discondfactory.getcartData=function(){
         return discondfactory.cartdata;
     };
     discondfactory.setcartData=function(data){
         discondfactory.cartdata.push(data);
         console.log(discondfactory.cartdata);
     };
      discondfactory.getcartlength=function(){
         return discondfactory.cartlength;
     };
     discondfactory.setcartlength=function(data){
         discondfactory.cartlength=data;
         console.log(discondfactory.cartlength);
      };
     return discondfactory;
  });
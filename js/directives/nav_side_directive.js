angular.module('dyw')
  .directive('naviSideMenu', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/nav_sidemenu.html'
    };
  });
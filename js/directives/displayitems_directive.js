angular.module('dyw')
  .directive('itemsDisplay', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/displayitems.html'
    };
  });
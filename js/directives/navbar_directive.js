angular.module('dyw')
  .directive('navMenu', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/navigation_template.html'
    };
  });

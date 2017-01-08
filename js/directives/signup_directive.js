angular.module('dyw')
  .directive('signUp', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/signup.html'
    };
  });
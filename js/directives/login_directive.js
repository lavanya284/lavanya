angular.module('dyw')
  .directive('logIn', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/loginform.html'
    };
  });
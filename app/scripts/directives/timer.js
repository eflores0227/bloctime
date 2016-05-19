(function() {
    function timer() {
      return {
        templateUrl: 'templates/timer.html'
        replace: true,
        restrict: 'E'
      };
    }

    angular
        .module('bloctime')
        .directive('timer', timer);
})

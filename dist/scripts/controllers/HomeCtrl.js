(function() {
    function HomeCtrl($scope, $interval, Fixtures) {
      const pomodoroTime = 2.00;
      const breakTime = 1.00;
      const longBreak = 1.00;


      var vm = this;
      var pomodoroCounter = 3;
      var currentInterval;

      var mySound = new buzz.sound( "assets/sounds/alert.mp3", {
          preload: true
      });

      $scope.timeLeft = pomodoroTime;
      $scope.currentMode = "Pomodoro Time"

      vm.reset = function(){
        $scope.timeLeft = pomodoroTime;
        vm.stop();
      }
      vm.stop = function(){
        $interval.cancel(currentInterval)
        $scope.$watch('vm.start', function() {
            mySound.play();
        })
      }
      vm.start = function(){
        currentInterval = $interval(function(){
          $scope.timeLeft--;
            if ($scope.timeLeft < 1){
              if($scope.currentMode == "Break Time"){
                $scope.timeLeft = pomodoroTime
                $scope.currentMode = "Pomodoro Time"
              }else{
                pomodoroCounter++;
                $scope.timeLeft = breakTime
                $scope.currentMode = "Break Time"
                if (pomodoroCounter == 4){
                  $scope.timeLeft = longBreak
                }
              }
              vm.stop();

            }

        }, 1000)
      }

      // $scope.$watch('vm.start', function() {
      //     mySound.play();
      // })
    }
    angular
      .module('bloctime')
      .controller('HomeCtrl',['$scope', '$interval', 'Fixtures', HomeCtrl]);
})();

(function() {
    function HomeCtrl($scope, $interval) {
      const pomodoroTime = 3;
      const breakTime = 2;
      const longBreak = 10;
      var vm = this;
      var pomodoroCounter = 3;
      $scope.timeLeft = pomodoroTime;
      $scope.currentMode = "Pomodoro Time"

      vm.reset = function(){
        $scope.timeLeft = pomodoroTime;
        vm.stop();
      }
      vm.stop = function(){
        $interval.cancel(currentInterval)
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
    }
    angular
      .module('bloctime')
      .controller('HomeCtrl',['$scope', '$interval', HomeCtrl]);
})();

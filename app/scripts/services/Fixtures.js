(function() {
    function Fixtures() {
      var Fixtures = {};

      var times = {
        longBreak: 1800.00,
        breakTime: 300.00,
        pomodoroTime: 1500.00
      };


      Fixtures.getTimes = function() {
          return times;
      };

      return Fixtures
    };
    angular
      .module('bloctime')
      .factory('Fixtures', Fixtures);
})();

(function() {
    function HomeCtrl() {
      var vm = this;
      vm.reset = function(){
        console.log(1)
      }
    }
    angular
      .module('bloctime')
      .controller('HomeCtrl', HomeCtrl);
})();

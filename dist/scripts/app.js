(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    console.log("WTF")
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      });
  }
    angular
      .module('bloctime', ['ui.router'])
      .config(config);
})();

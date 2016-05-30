(function() {
  function Tasks($firebaseArray) {
    var firebaseRef = new Firebase("<YOUR_FIREBASE_API_URL>");
  }

  angular
    .module('bloctime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();

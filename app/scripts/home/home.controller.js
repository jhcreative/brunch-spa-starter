// home controller

angular.module('appHome', [{
  files: [
    // '/css/home.css',

  ]
}])
  .controller('HomeController',
    [function(store) {

          var home = this;
          home.test = 'TESTING';

}]);

var GiphyApp = angular.module('GiphyApp', [])

.run(function() {
  console.log('App has loaded!');
});


GiphyApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('in the controller');
  // $scope.search = 'seahawks';

  $scope.gifSearch = function() {
    console.log($scope.searchGifs);
    $http.get('http://api.giphy.com/v1/gifs/search?', {
      params: {
        q: $scope.searchGifs,
        api_key: 'dc6zaTOxFJmzC'
      }
    })
  .then(function success(res) {
    $scope.gifs = res.data.data;
  }, function error(res) {
    console.log(res);
  });

  }


}]);

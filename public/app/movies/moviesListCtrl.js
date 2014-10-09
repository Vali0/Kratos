app.controller('moviesListCtrl', function($scope, cachedMovies) {
    $scope.movies = cachedMovies.query();
});
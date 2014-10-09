app.controller('MainCtrl', function($scope, cachedMovies, cachedReviews) {
    $scope.movies = cachedMovies.query();
    $scope.reviews = cachedReviews.query();
});
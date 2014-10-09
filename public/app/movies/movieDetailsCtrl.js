app.controller('movieDetailsCtrl', function($scope, $routeParams, cachedMovies) {
    $scope.movie = cachedMovies.query().$promise.then(function(collection) {
        collection.forEach(function(movie) {
            if (movie._id === $routeParams.id) {
                $scope.movie = movie;
            }
        })
    })
});
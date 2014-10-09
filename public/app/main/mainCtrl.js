app.controller('MainCtrl', function($scope, moviesData, reviewsData, notifier) {
    moviesData.getMovies().then(function(data) {
        if (data) {
            $scope.movies = data;
        }
        else {
            notifier.error('Error Fetching the movies!');
        }
    });

    reviewsData.getLatest().then(function(data) {
        if (data) {
            $scope.reviews = data;
        }
        else {
            notifier.error('Error Fetching the reviews!');
        }
    });
});
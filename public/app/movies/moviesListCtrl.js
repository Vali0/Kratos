app.controller('moviesListCtrl', ['$scope', 'notifier','moviesData', '$routeParams',
    function ($scope, notifier, moviesData, $routeParams) {
        moviesData.getAllMovies($routeParams.id).then(function(data) {
            if (data) {
                $scope.movies = data;
            }
            else {
                notifier.error('Error Fetching the trip!');
            }
        });
    }]);
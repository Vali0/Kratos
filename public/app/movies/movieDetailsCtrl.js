'use strict';

app.controller('MovieDetailsCtrl', ['$scope', 'notifier','moviesData', '$routeParams',
    function ($scope, notifier, moviesData, $routeParams) {
        moviesData.getMovie($routeParams.id).then(function(data) {
            if (data) {
                console.log(data);
                $scope.movie = data;
            }
            else {
                notifier.error('Error Fetching the trip!');
            }
        });
    }]);
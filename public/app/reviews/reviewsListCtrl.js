app.controller('reviewsListCtrl', ['$scope', 'notifier','reviewsData', '$routeParams',
    function ($scope, notifier, reviewsData, $routeParams) {
        reviewsData.getAllReviews($routeParams.id).then(function(data) {
            if (data) {
                $scope.reviews = data;
            }
            else {
                notifier.error('Error Fetching the reviews!');
            }
        });
    }]);
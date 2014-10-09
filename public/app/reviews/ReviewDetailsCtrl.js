'use strict';

app.controller('ReviewDetailsCtrl', ['$scope', 'notifier','reviewsData', '$routeParams',
    function ($scope, notifier, reviewsData, $routeParams) {
        reviewsData.getReview($routeParams.id).then(function(data) {
            if (data) {
                console.log(data);
                $scope.review = data;
            }
            else {
                notifier.error('Error Fetching the review!');
            }
        });
    }]);
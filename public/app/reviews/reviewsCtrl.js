'use strict';

app.controller('reviewsCtrl', ['$scope', 'notifier', 'reviewsData',
    function ($scope, notifier, reviewsData) {
        reviewsData.getReviews().then(function(data) {
            if (data) {
                $scope.reviews = data;
            }
            else {
                notifier.error('Error Fetching the reviews!');
            }
        });
    }]);
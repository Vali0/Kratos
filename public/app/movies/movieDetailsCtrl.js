'use strict';

app.controller('MovieDetailsCtrl', ['$scope', 'notifier','moviesData', 'reviewsData', '$routeParams',
    function ($scope, notifier, moviesData, reviewsData, $routeParams) {
        moviesData.getMovie($routeParams.id).then(function(data) {
            if (data) {
                $scope.movie = data;
            }
            else {
                notifier.error('Error Fetching the trip!');
            }
        });

        $scope.saveReview = function (review, addReviewForm) {
            console.log(review);
            console.log(addReviewForm);
            if(addReviewForm.$valid){
                reviewsData.postReview(review);
                notifier.success('Review '+ review.title +' added!');
            }
        };

    }]);
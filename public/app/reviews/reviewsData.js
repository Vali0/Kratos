'use strict';

app.factory('reviewsData', ['$http', '$q', 'baseServiceUrl',
    function($http, $q, baseServiceUrl) {
        var reviewApi = baseServiceUrl + '/api/reviews';

        return {
            getAllReviews: function () {
                var deferred = $q.defer();
                $http.get(reviewApi)
                    .success(function(data) {
                        deferred.resolve(data);
                    }, function(response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            },
            getReview: function (id) {
                var deferred = $q.defer();
                    $http.get(reviewApi + '/' + id)
                        .success(function(data) {
                            deferred.resolve(data);
                        }, function(response) {
                            deferred.reject(response);
                        });

                    return deferred.promise;
            },
            postReview: function (review) {
                var deferred = $q.defer();
                    $http.post(reviewApi, review)
                        .success(function (data) {
                            deferred.resolve(data);
                        }, function (response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
            },
            getLatest: function () {
                var deferred = $q.defer();
                $http.get(reviewApi + '/latest')
                    .success(function(data) {
                        deferred.resolve(data);
                    }, function(response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }
        }
    }]);
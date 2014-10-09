'use strict';

app.factory('reviewsData', ['$http', '$q', 'baseServiceUrl',
    function($http, $q, baseServiceUrl) {
        var reviewApi = baseServiceUrl + '/api/reviews/';

        return {
            getReviews: function () {
                var deferred = $q.defer();
                $http.get(reviewApi)
                    .success(function(data) {
                        deferred.resolve(data);
                    }, function(response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            }
        }
    }]);
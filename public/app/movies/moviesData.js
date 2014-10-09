'use strict';

app.factory('moviesData', ['$http', '$q', 'baseServiceUrl',
    function($http, $q, baseServiceUrl) {
        var moviesApi = baseServiceUrl + '/api/movies/';
        return {
            getMovies: function () {
                var deferred = $q.defer();
                $http.get(moviesApi)
                    .success(function(data) {
                        deferred.resolve(data);
                    }, function(response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            },
            getMovie: function (id) {
                var deferred = $q.defer();
                    $http.get(moviesApi + id)
                        .success(function(data) {
                            deferred.resolve(data);
                        }, function(response) {
                            deferred.reject(response);
                        });

                    return deferred.promise;
            }
        }
    }]);
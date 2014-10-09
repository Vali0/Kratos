app.factory('cachedMovies', function(movieResource) {
    var cachedMovies;

    return {
        query: function() {
            if (!cachedMovies) {
                cachedMovies = movieResource.query();
            }

            return cachedMovies;
        }
    }
});
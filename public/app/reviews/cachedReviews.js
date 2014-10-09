app.factory('cachedReviews', function(reviewResource) {
    var cachedReviews;

    return {
        query: function() {
            if (!cachedReviews) {
                cachedReviews = reviewResource.query();
            }

            return cachedReviews;
        }
    }
});
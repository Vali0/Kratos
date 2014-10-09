app.factory('reviewResource', function($resource) {
    var reviewResource = $resource('/api/reviews/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return reviewResource;
});
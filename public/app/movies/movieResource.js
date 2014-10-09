app.factory('movieResource', function($resource) {
    var movieResource = $resource('/api/movies/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return movieResource;
});
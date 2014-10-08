app.factory('CourseResource', function($resource) {
    var CourseResource = $resource('/api/movies/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return CourseResource;
});
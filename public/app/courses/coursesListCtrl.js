app.controller('CoursesListCtrl', function($scope, cachedCourses) {
    $scope.courses = cachedCourses.query();
});

// TODO: rename all courses files to movies

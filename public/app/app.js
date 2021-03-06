var app = angular.module('app', ['ngResource', 'ngRoute'])
    .value('toastr', toastr)
    .constant('baseServiceUrl', 'http://localhost:1234');

app.config(function($routeProvider, $locationProvider) {

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'MainCtrl'
        })
        .when('/movies', {
            templateUrl: '/partials/movies/movies-list',
            controller: 'moviesListCtrl'
        })
        .when('/movies/:id', {
            templateUrl: '/partials/movies/movie-details',
            controller: 'MovieDetailsCtrl'
        })
        .when('/reviews/', {
            templateUrl: '/partials/reviews/reviews-list',
            controller: 'reviewsListCtrl'
        })
        .when('/reviews/:id', {
            templateUrl: '/partials/reviews/review-details',
            controller: 'ReviewDetailsCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        })
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});
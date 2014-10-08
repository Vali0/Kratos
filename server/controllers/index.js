var UsersController = require('./UsersController');
var MoviesController = require('./MoviesController');
var ReviewsController = require('./ReviewsController');

module.exports = {
    users: UsersController,
    movies: MoviesController,
    reviews: ReviewsController
};
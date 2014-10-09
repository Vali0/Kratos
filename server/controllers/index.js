var UsersController = require('./UsersController');
var MoviesController = require('./MoviesController');
var ReviewsController = require('./ReviewsController');
var CommentsController = require('./CommentsController');

module.exports = {
    users: UsersController,
    movies: MoviesController,
    reviews: ReviewsController,
    comments: CommentsController
};
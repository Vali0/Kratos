var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);
    app.delete('/api/users', auth.isInRole('admin'), controllers.users.removeUser);

    app.get('/api/movies', controllers.movies.getAllMovies);
    app.get('/api/movies/:id', controllers.movies.getMovieById);
    app.get('/api/movies/:id/reviews', controllers.reviews.getMovieReviews);
    app.post('/api/movies', controllers.reviews.createMovie);
    app.put('/api/movies', auth.isInRole('admin'), controllers.movies.updateMovie);
    app.delete('/api/movies', auth.isInRole('admin'), controllers.movies.removeMovie);

    app.get('/api/reviews', controllers.reviews.getAllReviews);
    app.get('/api/reviews/latest', controllers.reviews.getLatestReviews);
    app.get('/api/reviews/:id', controllers.reviews.getReviewById);
    app.get('/api/reviews/:id/comments', controllers.comments.getReviewComments);
    app.post('/api/reviews', auth.isAuthenticated, controllers.reviews.createReview);
    app.put('/api/reviews', auth.isAuthenticated, controllers.reviews.updateReview);
    app.delete('/api/reviews', auth.isAuthenticated, controllers.reviews.removeReview);

    app.get('/api/comments', controllers.comments.getAllComments);
    app.get('/api/comments/:id', controllers.comments.getCommentById);
    app.post('/api/comments', auth.isAuthenticated, controllers.comments.createComment);
    app.put('/api/comments', auth.isAuthenticated, controllers.comments.updateComment);
    app.delete('/api/comments', auth.isAuthenticated, controllers.comments.removeComment);

    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
}

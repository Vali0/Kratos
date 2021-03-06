var mongoose = require('mongoose'),
    user = require('../models/User'),
    movie = require('../models/Movie'),
    review = require('../models/Review');
    comment = require('../models/Comment');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.once('open', function(err) {
        if (err) {
            console.log('Database could not be opened: ' + err);
            return;
        }

        console.log('Database up and running...')
    });

    db.on('error', function(err){
        console.log('Database error: ' + err);
    });

    user.seedInitialUsers();
    movie.seedInitialMovies();
    review.seedInitialReviews();
    comment.seedInitialComments();
};
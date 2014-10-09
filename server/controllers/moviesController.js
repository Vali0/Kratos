var filter = require('../utilities/query-filter');
var Movie = require('mongoose').model('Movie');

module.exports = {
    getAllMovies: function(req, res, next) {
        filter(Movie.find({}), req).exec(function(err, collection) {
            if (err) {
                console.log('Movie could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getMovieById: function(req, res, next) {
        Movie.findOne({_id: req.params.id}).exec(function(err, movie) {
            if (err) {
                console.log('Movie could not be loaded: ' + err);
            }

            res.send(movie);
        })
    }
};

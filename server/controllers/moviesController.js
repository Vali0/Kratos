var filter = require('../utilities/query-filter');
var Movie = require('mongoose').model('Movie');

module.exports = {
    createMovie: function(req, res, next) {
        var newMovieData = req.body;
        Movie.create(newMovieData, function(err, review) {
            if (err) {
                console.log('Failed to submit new movie: ' + err);
                return;
            }

            req.logIn(review, function(err) {
                if (err) {
                    res.status(400);
                    return res.send({reason: err.toString()});
                }

                res.send(review);
            })
        });
    },
    updateMovie: function(req, res, next) {
        if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
            var updatedMovieData = req.body;
            Movie.update({_id: req.body._id}, updatedMovieData, function() {
                res.send({success: true});
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    removeMovie: function(req, res, next) {
        if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
            Movie.remove({_id: req.body._id}, function() {
                res.send({success: true});
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    getAllMovies: function(req, res, next) {
        filter(Movie.find({}), req).exec(function(err, collection) {
            if (err) {
                console.log('Movies could not be loaded: ' + err);
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

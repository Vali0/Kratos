var Movie = require('mongoose').model('Movie');

module.exports = {
    getAllMovies: function(req, res, next) {
        Movie.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Courses could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getMovieById: function(req, res, next) {
        Movie.findOne({_id: req.params.id}).exec(function(err, course) {
            if (err) {
                console.log('Course could not be loaded: ' + err);
            }

            res.send(course);
        })
    }
};

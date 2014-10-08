var Review = require('mongoose').model('Review');

module.exports = {
    createReview: function(req, res, next) {
        var newReviewData = req.body;
        Review.create(newReviewData, function(err, review) {
            if (err) {
                console.log('Failed to submit new review: ' + err);
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
    updateReview: function(req, res, next) {
        if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
            var updatedReviewData = req.body;
            Review.update({_id: req.body._id}, updatedReviewData, function() {
                res.send({success: true});
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    getAllReviews: function(req, res) {
        Review.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Reviews could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getMovieReviews: function(req, res) {
        Review.find({movie: req.params.id}).exec(function(err, collection) {
            if (err) {
                console.log('Reviews could not be loaded: ' + err);
            }

            console.log(req.params.id);

            res.send(collection);
        })
    },
    getReviewById: function(req, res, next) {
        Review.findOne({_id: req.params.id}).exec(function(err, review) {
            if (err) {
                console.log('Review could not be loaded: ' + err);
            }

            res.send(review);
        })
    }
};
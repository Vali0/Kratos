var filter = require('../utilities/query-filter');
var Comment = require('mongoose').model('Comment');

module.exports = {
    createComment: function(req, res, next) {
        var newCommentData = req.body;
        Comment.create(newCommentData, function(err, comment) {
            if (err) {
                console.log('Failed to submit new comment: ' + err);
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
    updateComment: function(req, res, next) {
        if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
            var updatedCommentData = req.body;
            Comment.update({_id: req.body._id}, updatedCommentData, function() {
                res.send({success: true});
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    removeComment: function(req, res, next) {
        if (req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1) {
            Comment.remove({_id: req.body._id}, function() {
                res.send({success: true});
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    getAllComments: function(req, res) {
        filter(Comment.find({}), req).exec(function(err, collection) {
            if (err) {
                console.log('Comments could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getReviewComments: function(req, res) {
        filter(Comment.find({movie: req.params.id}), req).exec(function(err, collection) {
            if (err) {
                console.log('Comments could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getCommentById: function(req, res, next) {
        Comment.findOne({_id: req.params.id})
            .populate('review')
            .populate('author')
            .exec(function(err, comment) {
            if (err) {
                console.log('Comment could not be loaded: ' + err);
            }

            res.send(comment);
        })
    }
};
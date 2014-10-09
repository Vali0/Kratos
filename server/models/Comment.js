var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    comment: {type: String, required: true},
    postDate: { type: Date, default: Date.now },
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    review: {type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true}
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports.seedInitialReviews = function() {
    Comment.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find comments: ' + err);
            return;
        }

        mongoose.model('User').find().exec().then(function (_users) {
            var users = _users;
            mongoose.model('Review').find().exec().then(function (_reviews) {
                var reviews = _reviews;
                if (collection.length === 0) {
                    for (var i = 0; i < 10; i++) {
                        var randomUser = users[Math.floor(Math.random() * users.length)];
                        var randomReview = reviews[Math.floor(Math.random() * reviews.length)];
                        Review.create({
                            comment: 'Comment #' + i,
                            rating: Math.round((Math.random() * 10)),
                            author: randomUser,
                            movie: randomReview
                        }, function (err, comment) {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                }
            })
        });
    });
};

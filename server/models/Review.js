var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    postDate: { type: Date, default: Date.now },
    rating: {type: Number, min: 0, max: 10, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    movie: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true}
});

var Review = mongoose.model('Review', reviewSchema);

module.exports.seedInitialReviews = function() {
    Review.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find reviews: ' + err);
            return;
        }

        mongoose.model('User').find().exec().then(function (_users) {
            var users = _users;
            mongoose.model('Movie').find().exec().then(function (_movies) {
                var movies = _movies;
                if (collection.length === 0) {
                    for (var i = 0; i < 10; i++) {
                        var randomUser = users[Math.floor(Math.random() * users.length)];
                        var randomMovie = movies[Math.floor(Math.random() * movies.length)];
                        Review.create({
                            title: 'Review title #' + i,
                            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            rating: Math.round((Math.random() * 10)),
                            author: randomUser,
                            movie: randomMovie
                        }, function (err, review) {
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

var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
    title: String,
    description: String,
    coverPictureUrl: String,
    tags: [String]
});

var Movie = mongoose.model('Movie', moviesSchema);

module.exports.seedInitialMovies = function() {
    Movie.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find movies: ' + err);
            return;
        }

        if (collection.length === 0) {
            Movie.create({title: 'Gone Girl (2014)', description: 'With his wife\'s disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it\'s suspected that he may not be innocent.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SY317_CR0,0,214,317_AL_.jpg', tags: ['Gone', 'Girl']});
            Movie.create({title: 'Annabelle (2014)', description: 'A couple begin to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMjM2MTYyMzk1OV5BMl5BanBnXkFtZTgwNDg2MjMyMjE@._V1_SX214_AL_.jpg', tags: ['Annabelle']});
            Movie.create({title: 'The Equalizer (2014)', description: 'A man believes he has put his mysterious past behind him and has dedicated himself to beginning a new, quiet life. But when he meets a young girl under the control of ultra-violent Russian gangsters, he can\'t stand idly by - he has to help her.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_SY317_CR0,0,214,317_AL_.jpg', tags: ['The', 'Equalizer']});
            Movie.create({title: 'The Boxtrolls (2014)', description: 'A young orphaned boy raised by underground cave-dwelling trash collectors tries to save his friends from an evil exterminator. Based on the children\'s novel \'Here Be Monsters\' by Alan Snow.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMTQxODA5MDkyNV5BMl5BanBnXkFtZTgwMDMyNjkzMjE@._V1_SX214_AL_.jpg', tags: ['The', 'Boxtrolls']});
            Movie.create({title: 'The Maze Runner (2014)', description: 'Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow "runners" for a shot at escape.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX214_AL_.jpg', tags: ['The', 'Maze', 'Runner']});
            Movie.create({title: 'Left Behind (2014)', description: 'A small group of survivors are left behind after millions of people suddenly vanish and the world is plunged into chaos and destruction.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMjI4MjA2OTQxMF5BMl5BanBnXkFtZTgwMjcyMTI2MjE@._V1_SY317_CR4,0,214,317_AL_.jpg', tags: ['Left', 'Behind']});
            Movie.create({title: 'This Is Where I Leave You (2014)', description: 'When their father passes away, four grown siblings are forced to return to their childhood home and live under the same roof together for a week, along with their over-sharing mother and an assortment of spouses, exes and might-have-beens.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMjkzNzQ2NDMyNl5BMl5BanBnXkFtZTgwMTY3MTcxMjE@._V1_SX214_AL_.jpg', tags: ['This', 'Is', 'Where', 'I', 'Leave', 'You']});
            Movie.create({title: 'Dolphin Tale 2 (2014)', description: 'The team of people who saved Winter\'s life reassemble in the wake of her surrogate mother\'s passing in order to find her a companion so she can remain at the Clearwater Marine Hospital.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMjA5NzE4ODQwMV5BMl5BanBnXkFtZTgwMTc4OTA5MTE@._V1_SX214_AL_.jpg', tags: ['Dolphin', 'Tale', '2']});
            Movie.create({title: 'Guardians of the Galaxy (2014)', description: 'A group of space criminals must work together to stop a fanatic from destroying the galaxy.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX214_AL_.jpg', tags: ['Guardians', 'of', 'the', 'Galaxy']});
            Movie.create({title: 'No Good Deed (2014)', description: 'An unstable escaped convict terrorizes a woman who is alone with her two children.', coverPictureUrl: 'http://ia.media-imdb.com/images/M/MV5BMzk0OTc3MDM5MF5BMl5BanBnXkFtZTgwOTMzMDMzMjE@._V1_SY317_CR0,0,214,317_AL_.jpg', tags: ['No', 'Good', 'Deed']});
        }
    });
};

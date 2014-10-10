var mongoose = require('mongoose');
var config = require('../config/config').testing;
require('../config/mongoose')(config);
var Movie = require('mongoose').model('Movie');

var MoviesController = require('../controllers/MoviesController');
var expect = require('chai').expect;

describe('MoviesController', function () {
    describe('getAllMovies', function () {
        beforeEach(function (done) {
            mongoose.connection.collections['movies'].drop(function () {
                done();
            });
        });
        it('should show no movies with empty database', function (done) {
            var req = {};
            req.query = {};
            var res = {};
            res.send = function (collection) {
                expect(collection).to.be.empty;
                done();
            };
            MoviesController.getAllMovies(req, res);
        });
        it('should show one movie when one is existing in the database', function (done) {
            var req = {};
            req.query = {};
            var res = {};
            res.send = function (collection) {
                expect(collection.length).to.equal(1);
                for (var i = 0; i < collection.length; i++) {
                    expect(expected[i]._id).to.eql(collection[i]._id);
                }
                done();
            };
            var expected = [];
            Movie.create({
                title: 'TestMovie',
                description: 'test desc'
            }, function (err, result) {
                expected.push(result);
                MoviesController.getAllMovies(req, res);
            });
        });
        it('should find show the whole information for the movie', function (done) {
            var req = {};
            req.query = {};
            var res = {};
            res.send = function (collection) {
                for (var i = 0; i < collection.length; i++) {
                    expect(expected[i]._id).to.eql(collection[i]._id);
                    expect(expected[i].title).to.eql(collection[i].title);
                    expect(expected[i].description).to.eql(collection[i].description);
                    expect(expected[i].coverPictureUrl).to.eql(collection[i].coverPictureUrl);
                }
                done();
            };
            var expected = [];
            Movie.create({
                title: 'TestMovie',
                description: 'test desc',
                coverPictureUrl: 'http://bucharest-guide.ro/poze/76b4d89b45fb70dc02ddf8aa4f077585.jpg'
            }, function (err, result) {
                expected.push(result);
                MoviesController.getAllMovies(req, res);
            });
        })
    })
});
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/popcorn-critics',
        port: process.env.PORT || 1234
    },
    testing: {
        rootPath: rootPath,
        db: 'mongodb://localhost/popcorn-critics-test',
        port: process.env.PORT || 1234
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://admin:dsadsadsadsadsadsadsaewerwewtewfdfsgfsdfdsfefdsgfdhtrytett@ds027328.mongolab.com:27328/telerikacademycourses',
        port: process.env.PORT || 1234
    }
};
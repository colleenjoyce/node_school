var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = process.argv[3];

module.exports = function(directory, ext, callback) {
	fs.readdir(directory, function(err, files) {
		if (err)
			return callback(err)

		callback(null, files.filter(function(file) {
			return path.extname(file) === "." + ext;
		}));
	});
}
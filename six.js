var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = process.argv[3];

var six = require('./six-module.js')(directory, ext, function(err, files) {
	if (err) return console.log("There was an error: ", err);
	console.log(files.join("\n"));
});

// console.log(six);
// console.log(six.listFilter());
// console.log(six.directoryReader());
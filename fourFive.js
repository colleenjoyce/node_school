// EXERCISE 4
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, "utf8", function(err, data) {
	if (err) throw err;
	console.log(data.split("\n").length - 1);
});

// EXERCISE 5 
var path = require('path');

var directory = process.argv[2];
var ext = process.argv[3];

fs.readdir(directory, function(err, files) {
	var filteredList = files.filter(function(file) {
		return path.extname(file) === "." + ext;
	});
	console.log(filteredList.join("\n"));
});
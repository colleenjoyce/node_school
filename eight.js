var http = require('http');
var concat = require('concat-stream');
var fs = require('fs');

http.get(process.argv[2], function callback(response) {
	response.setEncoding('utf8');
	response.pipe(concat(function(data) {
		// if (err) {
		// 	return console.error(err);
		// }
		console.log(data.length);
		console.log(data);
	}));
});
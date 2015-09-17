var http = require('http');
var map = require('through2-map');
var fs = require('fs');

// var uppercase = map(function(chunk) {
// 	return chunk.toUpperCase();
// });

// function handleRequest(req, res, uppercase) {
// 	req.pipe(uppercase).pipe(res);
// }

// http.createServer(handleRequest).listen(process.argv[2]);

var server = http.createServer(function(req, res) {

	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);

}).listen(process.argv[2]);


// CHECKER 

// console.log("server listening");
// if (req.method == 'POST') {
// 	console.log("POST");
// } else {
// 	console.log("GET");
// }
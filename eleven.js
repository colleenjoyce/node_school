var http = require('http');
var fs = require('fs');

// option 1 

// var server = http.createServer(function callback(request, response) {
// 	fs.createReadStream(process.argv[3]).pipe(response);
// })

// server.listen(process.argv[2]);


// option 2 
function handleRequest(req, res) {
	fs.createReadStream(process.argv[3]).pipe(res);
}

http.createServer(handleRequest).listen(process.argv[2]);
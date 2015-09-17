var net = require('net');
var strftime = require('strftime')

var server = net.createServer(function(socket) {
	console.log('server connected');
	var time = strftime('%F %H:%M', new Date(), +"\n");
	socket.end(time);
});

server.listen(process.argv[2]);
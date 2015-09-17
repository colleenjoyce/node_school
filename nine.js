var http = require('http');

var requests = [];
var active = 0;


http.get(process.argv[2], function(res) {
	var data = '';
	res.on('data', function(chunk) {
		data += chunk;
	});
	res.on('end', function() {
		console.log(data);
		//-----------------
		http.get(process.argv[3], function(res) {
			var data2 = '';
			res.on('data', function(chunk) {
				data2 += chunk;
			});
			res.on('end', function() {
				console.log(data2);
				//-----------------
				http.get(process.argv[4], function(res) {
					var data3 = '';
					res.on('data', function(chunk) {
						data3 += chunk;
					});
					res.on('end', function() {
						console.log(data3);
					});
				});
			});
		});
	});
});
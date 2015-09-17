function check() {
	if (!active) {
		for (var i = 0; i < requests.length; i++) {
			require('util').inspect(requests[i].res, false, null);
		}
	}
}

for (var i = 2; i < process.argv.length; i++) {
	active++;
	var req = http.get(process.argv[i]);
	requests.push(req);

	req.on('response', function(response) {
		active--;
		check();
	})
}
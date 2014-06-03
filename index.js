// EXERCISE 2

var sum = 0
var itemCount = process.argv.length;

for (var i = 2; i < itemCount; i++) {
	sum += Number(process.argv[i]);
};

console.log(sum);


// EXERCISE 3

var fs = require('fs');

var file = process.argv[2];

var lines = fs.readFileSync(file, 'utf8').split("\n").length - 1;

console.log(lines);


// EXERCISE 4
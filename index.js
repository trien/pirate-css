let fs = require('fs');
var {convert} = require('./utils');
var fileToWrite = process.argv.pop();
var sourceFile = process.argv.pop();
console.log(sourceFile, fileToWrite);

fs.readFile(sourceFile, 'utf8', function (err,data) {
	
	if (err) {
		console.log('File not found');
		return console.log(err);
	}

	data = convert(data);

	fs.writeFile(fileToWrite, data, 'utf8', function (err) {
		if (err) return console.log(err);
	});
	
});
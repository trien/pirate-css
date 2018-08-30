var fs = require('fs');
var translations = require('./translations.json');
var fileToWrite = process.argv.pop();
var sourceFile = process.argv.pop();
console.log(sourceFile, fileToWrite);

fs.readFile(sourceFile, 'utf8', function (err,data) {
	
	if (err) {
		console.log('File not found');
		return console.log(err);
	}

	for (var find in translations) {
		let replace = translations[find];
		data = data.replace(new RegExp(find,'g'), replace);
	};

	fs.writeFile(fileToWrite, data, 'utf8', function (err) {
		if (err) return console.log(err);
	});
	
});
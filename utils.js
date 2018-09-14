var translations = require('./translations.json');
module.exports = {
	 convert: function (data) {
		for (var find in translations) {
			let replace = translations[find];
			find = find+"( |	)*\:";
			replace = replace+"\:";
			data = data.replace(new RegExp(find,'g'), replace);
		}
		return data;
	}
};
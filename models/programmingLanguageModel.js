const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProgrammingLanguage = null;

const programmingLanguageSchema = new Schema({
	languageName: String,
	yearCreated: String,
	website: String,
	designedBy: String
},
	{ collection: 'programingLanguages' }
);

module.exports.getProgrammingLanguageModel = () => {
		ProgrammingLanguage = mongoose.model('ProgrammingLanguage', programmingLanguageSchema);
	return ProgrammingLanguage;
};
	




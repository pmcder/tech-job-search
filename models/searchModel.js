const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let model = null;

const searchSchema = new Schema({
	searchName : String,
	location : String,
	lastRun : Date,
	resultsAtLastRun : Number,
	programmingLanguages : [
		{
		type: mongoose.Schema.Types.ObjectId,
        ref: "ProgrammingLanguage"
		}
	]
}, 
{ collection: 'searches'}
);
	module.exports.getSearchModel= () => {
			model = mongoose.model('searchModel', searchSchema);
		return model;
	};
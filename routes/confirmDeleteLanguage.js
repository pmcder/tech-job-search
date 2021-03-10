const db = require('../models/programmingLanguageModel');
const languages = db.getProgrammingLanguageModel();

module.exports = async (req , res , next) => {
    let lang = languages.findById(req.body.id);
    let langToDelete = await lang.map( l =>{
        return {
            name:l.languageName,
            yearCreated:l.yearCreated,
            designedBy:l.designedBy,
            website:l.website,
            id : l._id
        };
    });
   
    res.render('confirmDeleteLanguage',{data:langToDelete});
}
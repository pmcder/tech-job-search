const db = require('../models/programmingLanguageModel');
const Language = db.getProgrammingLanguageModel();

module.exports =  async (req , res , next) => {
    
    let lang =  Language.findById(req.params.id);
    
    let langToEdit = await lang.map( l =>{
        return {
            name:l.languageName,
            yearCreated:l.yearCreated,
            designedBy:l.designedBy,
            website:l.website,
            id : l._id
        };
    });
    console.log(langToEdit.designedBy);
    res.render('editLang',{data:langToEdit});
          
    };
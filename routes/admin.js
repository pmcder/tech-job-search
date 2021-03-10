const db = require('../models/programmingLanguageModel');
const Language = db.getProgrammingLanguageModel();

module.exports =  async (req , res , next) => {
    let lang = await Language.find({});
    let allLangs = lang.map( l =>{
        return {
            name:l.languageName,
            yearCreated:l.yearCreated,
            designedBy:l.designedBy,
            website:l.website,
            id : l._id
        };
    });
    res.render('admin',{data:allLangs});
          
    };
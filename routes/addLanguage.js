const db = require('../models/programmingLanguageModel');
const Language = db.getProgrammingLanguageModel();

module.exports = async (req , res , next) => {
        
        let lang = new Language({
        languageName : req.body.lname,
        yearCreated : req.body.yearCreated,
        website : req.body.website,
        designedBy : req.body.designedBy
      });
      await lang.save();
    res.redirect('/admin');
  };
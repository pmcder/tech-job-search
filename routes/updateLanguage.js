const db = require('../models/programmingLanguageModel');
const Language = db.getProgrammingLanguageModel();


module.exports = async (req,res,next)=>{
    let id = req.body.id;
  let lang = await Language.findById(id);
  
  await lang.updateOne({
    languageName:req.body.name,
    yearCreated:req.body.yearCreated,
    designedBy:req.body.designedBy,
    website:req.body.website,
  }

  );
   res.redirect('/admin');
// todo sucessful update page or modal before redirect to admin
}
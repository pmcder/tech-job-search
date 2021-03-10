const db = require('../models/programmingLanguageModel');
const Language = db.getProgrammingLanguageModel();


module.exports = async (req, res, next)=>{
    console.log(req.body.id);
    let lang = Language.findById(req.body.id);
    await lang.remove();
    res.redirect('/admin');
}
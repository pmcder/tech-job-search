const db = require('../models/programmingLanguageModel');
const Language = db.getProgrammingLanguageModel();

module.exports = async (req, res) => {

    let lang = new Language({
        languageName: req.body.languageName,
        yearCreated: req.body.yearCreated,
        website: req.body.website,
        designedBy: req.body.designedBy
    });
    await lang.save();
    res.status(201).send();
}
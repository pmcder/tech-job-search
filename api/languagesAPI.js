const { ProgrammingLanguage } = require('../models');
const db = require('../models/programmingLanguageModel');
const Language = db.getProgrammingLanguageModel();

module.exports = async (req, res) => {

  let queryId = req.query.id;

  let name = req.query.name;

  let year = req.query.createdAfter;

  let result = null;

  if (req.query.name){
    result = await Language.find({languageName : name});
  }

  else if (req.query.createdAfter){
    let allresult = await Language.find({});
    result = allresult.filter(lang=>{
      return (lang.yearCreated > year);
    });
  }

  else if (req.query.id) {
    result = await Language.find({_id : queryId});
  }
  
  else {
    result = await Language.find({});
  }
  
  res.format({

    'application/json': () => {
      res.json(result);
    },

    'application/xml': () => {
      let languagesXML =
        '<?xml version="1.0"?>\n<ProgrammingLanguages>\n' +
        result.map((l) => {
          return '<programmingLanguage id="' + l._id + '">\n' +
            '  <languageName>' + l.languageName + '</languageName>\n' +
            '  <yearCreated>' + l.yearCreated + '</yearCreated>\n' +
            '  <designedBy>' + l.designedBy + '</designedBy>\n' +
            '  <website>' + l.website + '</website>\n' +
            '</programmingLanguage>'
        }).join('\n') +
        '</ProgrammingLanguages>';
      res.type('application/xml');
      res.send(languagesXML);
    }
  });

}
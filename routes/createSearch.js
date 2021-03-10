const db = require('../models/searchModel');
const Search = db.getSearchModel();

module.exports = async (req , res , next) => {

      
        
        let search = new Search({
        searchName : req.body.searchName,
        location : req.body.location
      });
      await search.save();
      await search.update(
          { $push: { programmingLanguages : req.body.programmingLanguages} }, 
      {new: true}
        );
   
   
    res.redirect('/searches');
  };
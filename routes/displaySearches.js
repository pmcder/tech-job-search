const {Search,ProgrammingLanguage} = require('../models');
const addLanguage = require('./addLanguage');
const search = Search.getSearchModel();


module.exports =  async (req , res , next) => {

    let searches = await search.find({}).populate("programmingLanguages", "languageName _id").lean();
 
    let allSearches = searches.map( s =>{
        if(!s.lastRun){
        return {
            id : s._id,
            name : s.searchName,
            location : s.location,
            resultsAtLastRun : s.resultsAtLastRun,
            programmingLanguages : s.programmingLanguages
        };
    }
    else
        return {
            id : s._id,
            name : s.searchName,
            lastRun : s.lastRun.toDateString(),
            location : s.location,
            resultsAtLastRun : s.resultsAtLastRun,
            programmingLanguages : s.programmingLanguages
        };
    });
    res.render('displaySearches',{data:allSearches});
    };


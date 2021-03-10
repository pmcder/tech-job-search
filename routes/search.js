const db = require('../models/programmingLanguageModel');
const githubjobs = require('../lib/githubjobs');
const Language = db.getProgrammingLanguageModel();


module.exports =  async (req , res , next) => {
    let lang = await Language.find({});
    let allLangs = lang.map( l =>{
        return {
            name:l.languageName,
            id : l._id
        };
    });
    let locations = await githubjobs.getLocations();
    
    res.render('search',{data:allLangs, loc : locations});
          
    };
const { type } = require('os');
const github = require('../lib/githubjobs');
const {Search,ProgrammingLanguage} = require('../models');
const searches = Search.getSearchModel();

module.exports =  async (req , res , next) => {

    let search = await searches.findById(req.query.id);

    let searchLanguages = [];

    search = await searches.findById(req.query.id).populate("programmingLanguages", "languageName").lean();

    search.programmingLanguages.map(programmingLanguage=>{
        searchLanguages.push(programmingLanguage.languageName);
    });

    let descrip = searchLanguages.join().replace (/,/g,'+');
    const data = await github.search(search.location, descrip);

    let usearch = await searches.findById(req.query.id);
    await usearch.updateOne(
        {lastRun:Date.now(),
            resultsAtLastRun:data.length
        }
    )
    
    res.render('jobsearch',{results: data});
    };




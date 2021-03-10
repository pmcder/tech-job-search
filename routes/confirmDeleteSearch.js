const {Search,ProgrammingLanguage} = require('../models');
const searches = Search.getSearchModel();

module.exports = async (req , res , next) => {
    let search = await searches.findById(req.body.id).populate("programmingLanguages", "languageName").lean();
    res.render('confirmDeleteSearch',{data:search});
}
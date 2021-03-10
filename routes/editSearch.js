const {Search,ProgrammingLanguage} = require('../models');
const search = Search.getSearchModel();


module.exports = async (req, res, next) =>{

    let userSearch =  search.findById(req.params.id).populate("programmingLanguages", "languageName _id").lean();
    let searchToEdit = await userSearch.map(s=>{
        return  {
            id : s._id,
            name : s.searchName,
            location : s.location,
            programmingLanguages : s.programmingLanguages
        }
    });

    res.render('editSearch', {data : searchToEdit});
}
var express = require('express');
var router = express.Router();

const home = require('./home.js');
const admin = require('./admin.js');
const newSearch = require('./search.js');
const searches = require('./displaySearches.js');
const addLanguage = require('./addLanguage.js');
const createSearch = require('./createSearch.js');
const executeSearch = require('./executeSearch.js');
const deleteLanguage = require('./deleteLanguage.js');
const editLanguage = require('./editLanguage.js');
const updateLanguage = require('./updateLanguage.js');
const api = require('../api/languagesAPI.js');
const confirmDeleteSearch = require('./confirmDeleteSearch.js');
const deleteSearch = require('./deleteSearch.js');
const confirmDeleteLanguage = require('./confirmDeleteLanguage.js');
const languagesPost = require('../api/languagesPOST.js');


router.get('/',(req, res, next)=> {
  res.redirect('/home');
});
 
router.get('/home', home);

router.get('/admin', admin);
router.post('/addLanguage',addLanguage);
router.post('/deleteLanguage', deleteLanguage);
router.get('/editLang/id/:id', editLanguage);
router.post('/updateLanguage', updateLanguage);
router.post('/confirmDeleteLanguage',confirmDeleteLanguage);

router.get('/search', newSearch);
router.post('/search', createSearch );
router.get('/searches', searches);
router.get('/executeSearch', executeSearch);
router.post('/confirmDeleteSearch', confirmDeleteSearch);
router.post('/deleteSearch',deleteSearch);

router.get('/api/programminglanguages',api);
router.post('/api/programminglanguages',languagesPost);

module.exports = router;
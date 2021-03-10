var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const { stringify } = require('querystring');

const credentials = require("./credentials.js");

const dbUrl = 'mongodb+srv://' + credentials.username +
	':' + credentials.password + '@' + credentials.host + '/' + credentials.database +
	'?retryWrites=true&w=majority';

var app = express();

app.engine('handlebars', 
    handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./routes/index');
app.use('/', routes);

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

app.listen(3000, function(){
mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology: true});  
  console.log('application running at http://localhost:3000');
});
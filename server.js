//set up project constants

const express       = require('express');
const bodyParser    = require('body-parser');
const app           = module.exports = express();
const config        = require('./config/main');
const logger        = require('morgan');
const passwordHash  = require('password-hash');
const routeUser     = config.routeUser;
const hbs           = require('hbs');//initialize handlebars constant
//const restClient    = require('node-rest-client').client;

//route files
var home      = require('./routes/home.js');
var about     = require('./routes/about.js');
var music     = require('./routes/music.js');
var login     = require('./routes/admin/login.js');
var userdata  = require('./routes/api/userdata.js');

hbs.registerPartials(__dirname + '/views/partials');//register page paritals

app.set('view engine','hbs'); //sets the view engine to handle bars
app.use('/',express.static(__dirname + '/views'));//set express framework


app.listen(config.port,()=>{
  console.log('started on port 80, exposed to port 8088');
});

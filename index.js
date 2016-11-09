if(process.env.NODE_ENV !== "production") require('dotenv').config();

var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var config = require('./lib/config');

var app = express();
var PORT = process.env.PORT || 8080;

/* connect to mongodb */
mongoose.connect(config.db_uri);

/* body parser */
app.use(require('body-parser').json());

/* logger */
app.use(require('express-log-url'));
 
/* routers */
app.use(require('./lib/routers'));
 
/* start apps and listen to PORT */
app.listen(PORT, function() {
  console.log('Listening to port ' + PORT + '...');
});

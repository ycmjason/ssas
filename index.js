var express = require('express');
var mongoose = require('mongoose');

var config = require('./lib/config');
console.log(`>> valid user ids: ${JSON.stringify(config.valid_user_ids)}`);

/* Initiate the user data in the database */
require('./lib/utils/init_user_db')(config.valid_user_ids);

var app = express();
var PORT = process.env.PORT || 8080;

/* body parser */
app.use(require('body-parser').json());

/* logger */
app.use(require('express-log-url'));

/* connect to mongodb */
mongoose.connect(config.db_uri);
 
/* routers */
app.use(require('./lib/routers'));

/* static files */
app.use(express.static('public'));
 
/* start apps and listen to PORT */
app.listen(PORT, function() {
  console.log('Listening to port ' + PORT + '...');
});

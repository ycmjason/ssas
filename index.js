var express = require('express');
var mongoose = require('mongoose');

var config = require('./lib/config');

var app = express();
var PORT = process.env.PORT || 8080;

/* connect to mongodb */
mongoose.connect(config.db_uri);

/* logger */
app.use(require('express-log-url'));
 
/* routers */
app.use(require('./lib/routers'));

/* static files */
app.use(express.static('public'));
 
/* start apps and listen to PORT */
app.listen(PORT, function() {
  console.log('Listening to port ' + PORT + '...');
});

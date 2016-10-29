var express = require('express');
var app = express();
var config = require('./lib/config');

var PORT = process.env.PORT || 8080;

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

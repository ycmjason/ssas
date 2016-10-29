var mongoose = require('mongoose');
 
function DB() { };

DB.prototype.connect = function(URI) {
  mongoose.connect(URI);
}

module.exports = DB;

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('allocation', new Schema({
  _id: String,
  to: String
}));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  _id: String,
  username: String,
  name: String,
  picture: String
}));

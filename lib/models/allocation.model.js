var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('allocation', new Schema({
  _id: {type: String, ref: 'Person'},
  to: String
}));

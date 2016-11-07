var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('Allocation', new Schema({
  _id: {type: String, ref: 'User'},
  to: {type: String, ref: 'User'}
}));

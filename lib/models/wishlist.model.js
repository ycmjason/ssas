var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports = mongoose.model('Wishlist', new Schema({
  _id: {type: String, ref: 'User'},
  wishes: {type: [String]}
}));

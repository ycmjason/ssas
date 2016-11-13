#!/usr/bin/env node
require('dotenv').config()
var mongoose = require('mongoose');

var config = require('../lib/config');

var User = require('../lib/models/user.model');
var Wishlist = require('../lib/models/wishlist.model');

/* connect to mongodb */
mongoose.connect(config.db_uri);

function reportUser(user){
  return `${user.name} (${user._id})`;
}

function report(users, wishlists){
  var log = m => console.log(`>> ${m}`);
  console.log(`> Reporting...`);
  log(`Users (${users.length}):`);
  console.log(users.map(reportUser).join('\n'));
  log(`Number of wishlists: ${wishlists.length}`);
  unwish_users = users.filter(u => wishlists.reduce((b, w) => b && w._id !== u._id, true));
  log(`Users who haven't make their wishes: ${unwish_users.map(reportUser).join(', ')}`);
}

console.log('> Fetching users from database...');
User.find({}, (err, users) => {
  if(err) return console.erorr(err);
  Wishlist.find({}, (err, wishlists) => {
    if(err) return console.erorr(err);
    report(users, wishlists);
    mongoose.connection.close();
  });
});

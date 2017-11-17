#!/usr/bin/env node
require('dotenv').config()
var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
var mongoose = require('mongoose');

var config = require('../lib/config');

var User = require('../lib/models/user.model');
var Wishlist = require('../lib/models/wishlist.model');

/* connect to mongodb */
mongoose.connect(config.db_uri);

User.find({}, (err, users) => {
  console.log(users.map(u => `${u.id}: ${u.name}`).join('\n'));
  readline.question('Which id?', (id) => {
    Wishlist.remove({ _id: id }, (err) => err && console.error(err));
  });
});

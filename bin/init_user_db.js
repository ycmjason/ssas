#!/usr/bin/env node
console.log('You should not be calling this coz the production is published');
/*
var fs = require('fs');

require('dotenv').config()
var mongoose = require('mongoose');

var fb = require('../lib/adapters/fb');
var config = require('../lib/config');

var User = require('../lib/models/user.model');

/* connect to mongodb
mongoose.connect(config.db_uri);

function createUser(u, cb) {
  User.create(u, (err) => {
    if(err) throw err;
    console.log(`>> Added ${u.username} (${u.name})`);
    cb();
  });
}

function createUserFromUsername(username, cb) {
  fb.getUserByUsername(username, (u) => createUser(u, cb))
}

var usernames_file = './lib/config/valid_users/usernames.txt';
console.log(`> Getting usernames from ${usernames_file}...`);
var usernames = fs.readFileSync(usernames_file, 'utf8')
                  .split('\n')
                  .map(s => s.trim())
                  .filter(s => !!s);

console.log('> Clearing Users database...');
User.remove({}, (err) => {
  var counter = 0;

  console.log('> Adding users to database...');
  usernames.forEach((u) => createUserFromUsername(u, () => {
    if(++counter == usernames.length){
      console.log('> Users database initialised!');
      mongoose.connection.close();
    }
  }));
});
*/

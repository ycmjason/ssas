#!/usr/bin/env node
require('dotenv').config()
var mongoose = require('mongoose');

var fb = require('../lib/adapters/fb');
var config = require('../lib/config');

var User = require('../lib/models/user.model');
var Allocation = require('../lib/models/allocation.model');

var allocate = require('../lib/utils/allocate');

/* connect to mongodb */
mongoose.connect(config.db_uri);

function createAllocation(a, cb) {
  Allocation.create(a, (err) => {
    if(err) throw err;
    console.log(`>> Added allocation (${a._id}, ${a.to})`);
    cb();
  });
}

function createAllocationFromAllocationname(username, cb) {
  fb.getAllocation(username, (a) => createAllocation(a, cb))
}

console.log('> Fetching users from database...');
User.find({}, (err, users) => {
  if(err) return console.erorr(err);
  allocateUsers(users);
});

function allocateUsers(users) {
  console.log('> Clearing Allocations database...');
  Allocation.remove({}, (err) => {
    var counter = 0;

    console.log('> Allocating users...');
    var allocs = allocate(users.map((u) => u.id));

    console.log('> Adding allocations to database...');
    allocs.forEach((a) => createAllocation(a, () => {
      if(++counter == allocs.length){
        console.log('> Allocations database initialised!');
        mongoose.connection.close();
      }
    }));
  });
}

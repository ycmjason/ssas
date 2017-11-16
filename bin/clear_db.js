#!/usr/bin/env node
require('dotenv').config()
var mongoose = require('mongoose');

var config = require('../lib/config');

var User = require('../lib/models/user.model');
var Allocation = require('../lib/models/allocation.model');
var Wishlist = require('../lib/models/wishlist.model');

/* connect to mongodb */
mongoose.connect(config.db_uri);

User.remove({}, console.error.bind(console));
Wishlist.remove({}, console.error.bind(console));
Allocation.remove({}, console.error.bind(console));

var config = require('../config');

var User = require('../models/user.model');
var Allocation = require('../models/allocation.model');
var Wishlist = require('../models/wishlist.model');

var fb = require('../adapters/fb');

function get(id, cb){
  User.findOne({_id: id}, (err, u) => {
    if(err) return console.error(err);
    cb(u);
  });
}

function create(id, cb){
  fb.getUser(id, u => {
    User.create(u, (err, u) => {
      if(err) return console.error(err);
      cb(u);
    });
  });
}

// this is for /api/users/:id/...
function makeSureUserExists(req, res, next){
  get(req.params.id, (u) => {
    if(!u) return res.status(404).json({error: 'User not found.'});
    req.user = u;
    next();
  });
}

// GET /api/users
function getUsers(req, res){
  User.find({}, (err, users) => {
    if(err) return console.error(err);
    res.json(users);
  });
}

// GET /api/users/:id
function getUser(req, res){
  get(req.params.id, user => {
    if(user) return res.json(user);
    /* if user doesn't exist, create it */
    create(req.params.id, u => {
      res.json(u);
    }); 
  });
}

// GET /api/users/:id/allocation
function getAllocation(req, res){
  Allocation.findOne({_id: req.params.id})
    .populate('to')
    .exec((err, alloc) => {
      if(err) return console.error(err);
      if(!alloc) return res.status(404).json({error: 'No allocation found.'});
      res.json(alloc.to);
    });
}

// GET /api/users/:id/wishlist
function getWishlist(req, res) {
  Wishlist.findOne({_id: req.params.id}, (err, wishlist) => {
    if(err) return console.error(err);
    if(!wishlist) return res.status(404).json({error: 'No wishes made yet.'});
    res.json(wishlist.wishes);
  });
}

// POST /api/users/:id/wishlist
function createWishlist(req, res) {
  if(!req.body.wishes) return res.status(400).json({error: 'No wishes received.'});
  if(Array.isArray(req.body.wishes) && req.body.wishes.length !== 3) return res.status(400).json({error: 'Number of wishes is not right!'});

  Wishlist.create({_id: req.params.id, wishes: req.body.wishes}, (err, wishlist) => {
    if(err) return console.error(err);
    res.json(wishlist.wishes);
  });
}

module.exports = {
  getUser: getUser,
  getAllocation: [makeSureUserExists, getAllocation],
  getWishlist: [makeSureUserExists, getWishlist],
  createWishlist: [makeSureUserExists, createWishlist],
};

var config = require('../config');

var User = require('../models/user.model');
var Allocation = require('../models/allocation.model');

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
      res.json(alloc.to);
    });
}

module.exports = {
  getUser: getUser,
  getAllocation: getAllocation,
};

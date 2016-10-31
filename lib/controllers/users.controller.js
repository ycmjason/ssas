var config = require('../config');

var User = require('../models/user.model');
var Allocation = require('../models/allocation.model');

// GET /api/users
function getUsers(req, res){
  res.json(config.valid_user_ids);
}

// GET /api/user/:id
function getUser(req, res){
  User.findOne({_id: req.params.id}, (err, user) => {
    if(err) return console.error(err);
    res.json(user);
  });
}

// GET /api/user/:id/allocation
function getAllocation(req, res){
  Allocation.findOne({_id: req.params.id}, (err, alloc) => {
    if(err) return console.error(err);
    if(!alloc) return allocate(req, res);

    res.json(alloc);
  });
}

// POST /api/user/:id/allocation (pending?)
function allocate(req, res){
  var getRandomAvailableUser = (cb) => {
    Allocation.find({}, (err, allocs) => {
      tos = allocs.map((alloc) => alloc.to);
      var available_users = config.valid_user_ids.filter((id) => tos.indexOf(id) < 0);
      cb(available_users[Math.floor(Math.random() * available_users.length)]);
    });
  };

  getRandomAvailableUser((available_id) => {
    Allocation.create({_id: req.params.id, to: available_id}, (err) => {
      if(err) return console.error(err);
    });
  });
}

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  getAllocation: getAllocation,
};

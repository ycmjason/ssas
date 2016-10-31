var fb = require('../adapters/fb');

var User = require('../models/user.model');

function createUser(u) {
  User.create(u, (err) => {
    if(err) throw err;
  });
}

module.exports = function(ids){
  console.log('>> Removing users from database...');
  User.remove({}, (err) => {
    console.log('>> Adding users back to database...');
    ids.forEach((id) => {
      fb.getUser(id, createUser);
    });
  });
};

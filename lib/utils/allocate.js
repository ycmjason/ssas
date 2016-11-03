var utils = require('../utils');

module.exports = function allocate(users){
  var shuffled_users = utils.array.shuffle(users);
  var allocs = [];
  shuffled_users.forEach((u, i) => {
    allocs.push({
      _id: u,
      to: shuffled_users[(i + 1) % shuffled_users.length]
    });
  });
  return allocs;
};

var utils = require('../utils');

module.exports = function allocate(users){
  var allocs = {};
  var rand = (from, to) => from + Math.floor(Math.random() * to);

  /* clone an array */
  var unmapped_users = utils.array.clone(users);

  users.forEach((u) => {
    // get a random user in the unmapped list
    var random_index = rand(0, unmapped_users.length);
    var to = unmapped_users[random_index];
    // remove that random user
    unmapped_users = utils.array.removeFrom(random_index, unmapped_users);
    allocs[u] = to;
  });
  
  console.log(allocs);
  return allocs;
}

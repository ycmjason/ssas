/* allocs: [{_id, to}] */
module.exports = function allocate(user, users, allocs){
  if(allocs[user]) return allocs[user];
  if(users.indexOf(user) < 0) throw "";

}

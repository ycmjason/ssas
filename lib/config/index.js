var utils = require('../utils');

var env = process.env;

/* db_uri */
var dbuser = utils.base64.decode(env.dbuser);
var dbpassword = utils.base64.decode(env.dbpassword);

module.exports = {
  db_uri: `mongodb://${dbuser}:${dbpassword}@ds023435.mlab.com:23435/ssas`,
  valid_user_ids: require('./valid_users')
};

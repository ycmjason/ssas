var utils = require('../utils');

var env = process.env;

module.exports = {
  db_uri: env.MONGO_URL,
  fb: {
    appId: utils.base64.decode(env.fbAppId),
    appSecret: utils.base64.decode(env.fbAppSecret),
  }
};

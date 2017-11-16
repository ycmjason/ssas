var env = process.env;

module.exports = {
  db_uri: env.MONGO_URL,
  fb: {
    appId: env.fbAppId,
    appSecret: env.fbAppSecret,
  }
};

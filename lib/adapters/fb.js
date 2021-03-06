var FB = require('fb');
var getFacebookId = require('get-facebook-id');

var config = require('../config');

function FBAdapter() {
  FB.options({
    version: 'v2.8',
    appId: config.fb.appId,
    appSecret: config.fb.appSecret,
  });
}

FBAdapter.prototype.setAccessToken = function(cb){
  if(FB.getAccessToken()) return cb();

  FB.api('oauth/access_token', {
    client_id: config.fb.appId,
    client_secret: config.fb.appSecret,
    grant_type: 'client_credentials'
  }, (res) => {
    if(!res || res.error) {
      console.error(!res ? 'error occurred' : res.error);
      return;
    }

    access_token = res.access_token;
    FB.setAccessToken(access_token);
    cb();
  });
};

FBAdapter.prototype.getUser = function(id, cb){
  this.setAccessToken(() => FB.api(id, {fields: ['id', 'name', 'link']}, (user) => {
    if(user.error) {
      console.error(user.error);
      return;
    }

    cb({
      _id: user.id,
      name: user.name,
      link: user.link,
      picture: `https://graph.facebook.com/${user.id}/picture?height=320&width=320`
    });

  }));
};

FBAdapter.prototype.getUserByUsername = function(username, cb){
  getFacebookId(username, (id) => {
    this.setAccessToken(() => FB.api(id, {fields: ['id', 'name']}, (user) => {
      if(user.error) {
        console.error(user.error);
        return;
      }

      cb({
        _id: user.id,
        name: user.name,
        link: `https://facebook.com/${user.id}`,
        picture: `https://graph.facebook.com/${user.id}/picture?height=320&width=320`
      });

    }));
  });
};

FBAdapter.prototype.getPicture = function(id, cb) {
  this.setAccessToken(() => {
    FB.api(`${id}/picture`,
           {height: 320, width: 320, redirect: false},
           (res) => {
             cb(res.data.url);
           });
  });
};

module.exports = new FBAdapter();

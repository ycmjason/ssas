exports.base64 = {
  encode: (s) => new Buffer(s).toString('base64'),
  decode: (s) => new Buffer(s, 'base64').toString()
};

exports.array = require('./array');

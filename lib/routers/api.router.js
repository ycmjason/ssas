var express = require('express');

var controllers = {
  users: require('../controllers/users.controller.js')
};

/* router for '/api' */
var router = new express.Router();

router.get('/', (req, res) => {
  res.end('hello');
});

module.exports = router;

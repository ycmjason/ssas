var express = require('express');

/* router for '/api' */
var router = new express.Router();

router.get('/', (req, res) => {
  res.end('hello');
});

module.exports = router;

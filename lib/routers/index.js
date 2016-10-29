var express = require('express')

var router = new express.Router();

router.use('/api', require('./api.router'));

module.exports = router;

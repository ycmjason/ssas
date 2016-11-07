var express = require('express')

var router = new express.Router();

router.use('/api', require('./api.router'));
router.use('/', require('./static.router'));

module.exports = router;

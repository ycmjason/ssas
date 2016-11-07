var path = require('path');

var express = require('express');

var public_dir = path.join(__dirname, '../../public');

/* router for static files */
var router = new express.Router();

router.use(express.static(public_dir));

router.all('/*', (req, res) => res.sendFile(public_dir + '/index.html'));

module.exports = router;

var express = require('express');

var controllers = {
  users: require('../controllers/users.controller.js')
};

/* router for '/api' */
var router = new express.Router();

router.get('/', (req, res) => res.end('api end point'));

// router.get('/users', controllers.users.getUsers);
router.get('/users/:id', controllers.users.getUser);

router.get('/users/:id/allocation', controllers.users.getAllocation);

router.get('/users/:id/wishlist', controllers.users.getWishlist);
router.post('/users/:id/wishlist', controllers.users.createWishlist);

module.exports = router;

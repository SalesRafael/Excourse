var express = require('express');

router = express.Router();
//var User    = require('../models/user');
var UserController  = require('../controllers/userController');

/* GET all users. */
router.get('/',UserController.getUsers);

/* GET one users. */
router.get('/:id', UserController.getUser);

/* Create a user. */
router.post('/', UserController.insertUser);

/* Check user credentials */
router.post('/login', UserController.login);

module.exports = router;
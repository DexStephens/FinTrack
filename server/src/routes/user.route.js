const express = require('express');
const userController = require('../controller/user.controller.js');

const router = express.Router();

router.post('/validateUser', userController.validateUser);

router.post('/createUser', userController.createUser)

module.exports = router;
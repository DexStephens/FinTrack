const express = require('express');
const userController = require('../controller/user.controller.js');
const validateSchema = require('../middleware/schemaValidation.middleware.js');
const userSchema = require('../schemas/user.schema.js');

const router = express.Router();

router.post('/validateUser', validateSchema(userSchema), userController.validateUser);

router.post('/createUser', validateSchema(userSchema), userController.createUser)

module.exports = router;
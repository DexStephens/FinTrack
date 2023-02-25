const userService = require('../services/users.service');

async function validateUser(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const users = await userService.validateUser(email, password);
        if(users === null)
        {
            res.status(400).json({'error': 'Invalid Credentials'});
        }
        res.status(200).json(users);
    } catch (err) {
        console.error(`Error while validating user`, err.message);
        next(err);
    }
}

async function createUser(req, res, next) {
    try {
        //need to create a user object from the request body
        const user = {
            'first_name': req.body.user.firstName,
            'last_name': req.body.user.lastName,
            'email': req.body.user.email,
            'password': req.body.user.password
        }
        const newUser = await userService.createUser(user);
        if (newUser === null) {
            res.status(422);
        }
        res.status(201).json(newUser);
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}

module.exports = {
    validateUser,
    createUser
}
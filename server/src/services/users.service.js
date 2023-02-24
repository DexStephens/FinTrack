const db = require('../configs/db.config');
const jwt = require('jsonwebtoken');
const passwordService = require('../services/password.service');

async function validateUser(email, password){
    const [user] = await db('users').where('email', email).returning('*');
    if (user.length === 0) {
        //return not found
        return null;
    } else {
        const valid = await passwordService.validateHash(password, user.password);
        if (valid) {
            const token = jwt.sign({ 'user': user.email}, process.env.JWT_SECRET_KEY, { expiresIn: '2h'});
            user.token = token;
            return user;
        } else {
            return null;
        }
    }
}

async function createUser(newUser) {
    try {
        newUser.password = await passwordService.generateHashPass(newUser.password);
        const [createdUser] = await db('users').insert(newUser).returning('*');

        const token = jwt.sign({ 'user': createdUser.email }, process.env.JWT_SECRET_KEY, {expiresIn: '2h'});

        createdUser.token = token;

        return createdUser;
    } catch {
        return null;
    }
}

module.exports = {
    validateUser,
    createUser
}
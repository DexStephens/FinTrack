const bcrypt = require("bcrypt")
const saltRounds = 10

async function generateHashPass(password) {
    return bcrypt.hash(password, 10)
}

async function validateHash(password, dbHashPass) {
    return bcrypt.compare(password, dbHashPass)
}

module.exports = {
    generateHashPass,
    validateHash
}
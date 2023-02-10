async function validateUser(req, res, next) {
    try {
        res.json({"validated": true});
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}

async function createUser(req, res, next) {
    try {
        res.json({"validated": true});
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}

module.exports = {
    validateUser,
    createUser
}
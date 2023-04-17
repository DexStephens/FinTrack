const { validate } = require('jsonschema');

const validateSchema = (schema) => {
    return function(req, res, next) {
        const result = validate(req.body, schema);

        if (!result.valid) {
        const errors = result.errors.map(error => error.stack);
        return res.status(400).json({ errors });
        }

        next();
    };
}

module.exports = validateSchema;
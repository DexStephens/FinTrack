const userSchema = {
    type: 'object',
    properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string' }
    },
    required: ['firstName', 'lastName', 'email', 'password']
};

module.exports = userSchema;

//example schema
// const userSchema = {
//     type: 'object',
//     properties: {
//       name: { type: 'string' },
//       email: { type: 'string', format: 'email' },
//       age: { type: 'number' }
//     },
//     required: ['name', 'email']
//   };
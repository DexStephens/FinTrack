const income = {
    type: 'object',
    properties: {
        amount: {type: 'number'},
        date: {type: 'string', format: 'date'},
        description: {type: 'string'},
        category: {type: 'string'},
        notes: {type: 'string'}
    },  
    required: ['amount', 'date', 'category']
}

module.exports = income
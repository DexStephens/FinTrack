const incomeService = require('../services/income.service');

async function getIncomeRoute(req, res, next) {

}

async function postIncomeRoute(req, res, next) {
    const income = {
        'amount': req.body.user.amount,
        'date': req.body.user.date,
        'description': req.body.user.description,
        'category': req.body.user.category,
        'notes': req.body.user.notes,
        'user_id': req.user.id
    }

    
}

module.exports = {
    getIncomeRoute,
    postIncomeRoute
}
const db = require('../configs/db.config');

async function getIncomes(userId) {
    const [incomes] = await db('incomes').where('user_id', userId).returning('*').orderBy('date');
    return incomes;
}

async function postIncome(income) {
    
}

module.exports = {
    getIncomes,
    postIncome
}
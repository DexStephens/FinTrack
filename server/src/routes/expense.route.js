const express = require('express');
const expenseController = require('../controller/expense.controller');

const router = express.Router();

router.get('/', expenseController.getExpenseRoute);

router.post('/', expenseController.postExpenseRoute);

module.exports = router;
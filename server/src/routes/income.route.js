const express = require('express');
const incomeController = require('../controller/income.controller');

const router = express.Router();

router.get('/', incomeController.getIncomeRoute);

router.post('/', incomeController.postIncomeRoute);

module.exports = router;

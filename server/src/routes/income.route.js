const express = require('express');
const incomeController = require('../controller/income.controller');
const validateSchema = require('../middleware/schemaValidation.middleware');
const incomeSchema = require('../schemas/income.schema');

const router = express.Router();

router.get('/', validateSchema(incomeSchema), incomeController.getIncomeRoute);

router.post('/', validateSchema(incomeSchema), incomeController.postIncomeRoute);

module.exports = router;

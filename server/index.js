const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./src/routes/user.route.js');
const incomeRouter = require('./src/routes/income.route.js');
const expenseRouter = require('./src/routes/expense.route.js');
const bodyParser = require('body-parser');
const auth = require('./src/middleware/auth.middleware');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/incomes', auth, incomeRouter);
app.use('/expenses', auth, expenseRouter);

app.use('/user', userRouter);


app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

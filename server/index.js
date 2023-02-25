const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./src/routes/user.route.js');
const bodyParser = require('body-parser');
const auth = require('./src/middleware/auth.middleware');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', auth, (req, res) => {
    res.json({'message': 'ok'});
})

app.use('/user', userRouter);


app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

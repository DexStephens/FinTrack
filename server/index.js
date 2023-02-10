const express = require('express');
const userRouter = require('./src/routes/user.route.js');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
})

app.use('/user', userRouter);


app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

'use strict';
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const notFoundPage = require('./error-handlers/404')
const errorHandler = require('./error-handlers/500')
const signUp = require('./routers/sign-up')
const SignIn = require('./routers/sign-in')
const recordRouters = require('./routers/my-records')

app.use(express.json());
app.use(cors());
app.use(signUp)
app.use(SignIn)
app.use(recordRouters)
app.get('/', (req, res) => {
    res.status(200).send('Home');
});



function start(port) {
    app.listen(port, () => {
        console.log(`App is running on Port ${port}`)
    })
}


app.use(errorHandler)
app.use('*', notFoundPage);

module.exports = {
    app: app,
    start: start
}

'use strict'
// creating a signin endpoint for the users using express Router

const routers = require('express').Router();
const basic = require('../middlewares/basic')

routers.post('/signin/users', basic, async (req, res) => {
    res.status(200).send(req.User)
})
module.exports = routers

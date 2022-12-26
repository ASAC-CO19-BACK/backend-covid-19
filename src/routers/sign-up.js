'use strict';
// creating a signup endpoint for the users using express Router
const routers = require('express').Router();

const { Usermodel } = require('../models/index')
const bcrypt = require('bcrypt')

routers.post('/signup/users', async (req, res) => {
    let { userName, password, email } = req.body;
   let hashedPassword = await bcrypt.hash(password,5);
   let newUser = await Usermodel.create({
    userName :userName,
    email :email,
    password :hashedPassword
   })
   res.status(201).send(newUser)
})

module.exports = routers;
'use strict';
const routers = require('express').Router();
const { MyRecords } = require('../models/index')
const bearer = require('../middlewares/bearer')

routers.post('/AddRecord', bearer, async (req, res) => {
    let { country, totalConfirmedCases, totalDeathCases, totalRecoveredCases, Date } = req.body;
    let newRecord = await MyRecords.create({
        country: country,
        totalConfirmedCases: totalConfirmedCases,
        totalDeathCases: totalDeathCases,
        totalRecoveredCases: totalRecoveredCases,
        Date: Date,
    })
    res.status(201).send(newRecord)
})
routers.get('/getRecords', bearer, async (req, res) => {
    let allRecords = await MyRecords.findAll()
    res.status(200).send(allRecords)
})
routers.delete('/deleteRecord/:id', bearer, async (req, res) => {
    let deletedRecord = await MyRecords.destroy({ where: { id: req.params.id } })
    res.status(200).send(`record was deleted sucsessfully`)
})
module.exports = routers;
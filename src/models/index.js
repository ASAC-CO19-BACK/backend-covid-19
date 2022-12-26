'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const userModel = require('./user-model')
const myRecords = require('./my-records')


const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

let Usermodel = userModel(sequelize, DataTypes)
let MyRecords = myRecords(sequelize, DataTypes)


module.exports = {
    db: sequelize,
    Usermodel:Usermodel,
    MyRecords:MyRecords,
};

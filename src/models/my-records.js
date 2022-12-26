'use strict';
const MyRecords = (sequelize, DataTypes) => sequelize.define('myrecords', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    country: {
        type: DataTypes.STRING,
    },
     totalConfirmedCases: {
        type: DataTypes.INTEGER,
    },
    totalDeathCases: {
        type: DataTypes.INTEGER,

    },
    totalRecoveredCases: {
        type: DataTypes.INTEGER,
    },
    Date: {
        type: DataTypes.STRING,
    },



});
module.exports = MyRecords;
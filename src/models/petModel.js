// src/models/petModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Pet = sequelize.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    breed: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
});

module.exports = Pet;

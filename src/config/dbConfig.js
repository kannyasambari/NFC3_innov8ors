// src/config/dbConfig.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pet_adoption', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Set to true to enable SQL logging
});

module.exports = sequelize;

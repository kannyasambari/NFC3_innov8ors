// src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import your routes
const sequelize = require('./config/dbConfig'); // Import your database configuration

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Sync models with database
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => console.error('Database sync error:', err));

module.exports = app; // Export the Express app instance


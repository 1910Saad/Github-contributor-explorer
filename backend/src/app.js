const express = require('express');
const cors = require('cors');
const contributorsRoutes = require('./routes/contributors');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON

// Routes
app.use('/api/contributors', contributorsRoutes);

module.exports = app;

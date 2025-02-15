const express = require('express');
const cors = require('cors');

const periodRoutes = require('./routes/periodRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/periods', periodRoutes);

module.exports = app;

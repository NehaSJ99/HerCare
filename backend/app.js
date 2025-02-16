const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const periodRoutes = require('./routes/periodRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/periods', periodRoutes);
app.use('/api/doctors', doctorRoutes);
module.exports = app;

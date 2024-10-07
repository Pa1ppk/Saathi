// backend/app.js

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const itineraryRoutes = require('./routes/itineraryRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api', itineraryRoutes);

// Connect to RDS and start the server
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to AWS RDS!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Unable to connect to the database:', err));

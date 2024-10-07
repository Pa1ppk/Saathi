// backend/routes/itineraryRoutes.js

const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/itineraryController');

// POST route for generating personalized itineraries
router.post('/generateItinerary', itineraryController.generateItinerary);

module.exports = router;

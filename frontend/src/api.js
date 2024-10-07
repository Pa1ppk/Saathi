// frontend/src/api.js

import axios from 'axios';

// Set up the base URL for the backend server
const API_URL = 'http://localhost:5000/api';

// Function to generate a personalized itinerary
export const generateItinerary = async (userId, destination) => {
  try {
    const response = await axios.post(`${API_URL}/generateItinerary`, {
      user_id: userId,
      destination: destination,
    });
    return response.data;
  } catch (error) {
    console.error('Error generating itinerary:', error);
    throw error;
  }
};

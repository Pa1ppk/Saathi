// frontend/src/components/ItineraryDashboard.js

import React, { useState } from 'react';
import { generateItinerary } from '../api';

const ItineraryDashboard = () => {
  const [userId, setUserId] = useState(1);  // Sample user ID for testing
  const [destination, setDestination] = useState('');
  const [itinerary, setItinerary] = useState('');

  // Handle the form submission
  const handleGenerateItinerary = async (e) => {
    e.preventDefault();
    try {
      const response = await generateItinerary(userId, destination);
      setItinerary(response.itinerary);
    } catch (err) {
      console.error('Failed to generate itinerary:', err);
    }
  };

  return (
    <div className="itinerary-dashboard">
      <h1>Personalized Itinerary Dashboard</h1>
      
      <form onSubmit={handleGenerateItinerary}>
        <label>
          Enter Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </label>
        <button type="submit">Generate Itinerary</button>
      </form>

      {itinerary && (
        <div className="itinerary-results">
          <h2>Your Personalized Itinerary:</h2>
          <pre>{itinerary}</pre>
        </div>
      )}
    </div>
  );
};

export default ItineraryDashboard;


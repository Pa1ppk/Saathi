// backend/controllers/itineraryController.js

const User = require('../models/userModel');
const axios = require('axios');

// Controller logic to generate a personalized itinerary
exports.generateItinerary = async (req, res) => {
  const { user_id, destination } = req.body;

  try {
    // Fetch past user data from RDS based on the user_id
    const userData = await User.findByPk(user_id);
    if (!userData) return res.status(404).json({ error: 'User not found' });

    // Construct the prompt for OpenAI based on past user data
    const itineraryPrompt = `
      User has previously traveled to ${userData.previous_destinations} with an average daily spend of ${userData.expenses}.
      They prefer a ${userData.vibe} vibe and enjoy activities like ${userData.favorite_activities}.
      Generate a personalized 3-day itinerary for a trip to ${destination} that fits their preferences.
    `;

    // Call OpenAI's GPT model for itinerary generation
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        prompt: itineraryPrompt,
        max_tokens: 500,
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );

    const itinerary = response.data.choices[0].text;
    res.status(200).json({ itinerary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error generating itinerary' });
  }
};

// backend/models/userModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the User model schema
const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  expenses: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  vibe: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviews: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  instagram_photos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  previous_destinations: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  favorite_activities: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;

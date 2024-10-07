
// backend/config/db.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configure Sequelize to connect to RDS
const sequelize = new Sequelize(
  process.env.RDS_DB_NAME,       // Database name
  process.env.RDS_USERNAME,      // Username
  process.env.RDS_PASSWORD,      // Password
  {
    host: process.env.RDS_HOSTNAME,  // RDS Hostname
    dialect: 'mysql',               // Database dialect (MySQL)
    logging: false                  // Disable SQL query logging
  }
);

module.exports = sequelize;

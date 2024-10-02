const { Pool } = require('pg');
const pool = require('../config/db');

const createEngagementPostTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS engagement_post (
      id SERIAL PRIMARY KEY,
      tenant_id INT NOT NULL,
      thumbnail_title VARCHAR(255),
      views INT DEFAULT 0
    );
  `);
};

createEngagementPostTable();

module.exports = pool;

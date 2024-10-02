const { Pool } = require('pg');
const pool = require('../config/db');

const createEngagementPostContentTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS engagement_post_content (
      id SERIAL PRIMARY KEY,
      post_id INT NOT NULL,
      url VARCHAR(255) NOT NULL,
      FOREIGN KEY (post_id) REFERENCES engagement_post(id)
    );
  `);
};

createEngagementPostContentTable();

module.exports = pool;

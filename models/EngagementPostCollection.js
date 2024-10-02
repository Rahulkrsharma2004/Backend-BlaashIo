const { Pool } = require('pg');
const pool = require('../config/db');

const createEngagementPostCollectionTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS engagement_post_collection (
      post_id INT NOT NULL,
      collection_id INT NOT NULL,
      duration_in_seconds INT DEFAULT 0,
      PRIMARY KEY (post_id, collection_id),
      FOREIGN KEY (post_id) REFERENCES engagement_post(id),
      FOREIGN KEY (collection_id) REFERENCES collection(id)
    );
  `);
};

createEngagementPostCollectionTable();

module.exports = pool;

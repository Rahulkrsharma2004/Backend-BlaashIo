const { Pool } = require('pg');
const pool = require('../config/db');

const createEngagementPostProductMappingTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS engagement_post_product_mapping (
      post_id INT NOT NULL,
      product_id INT NOT NULL,
      PRIMARY KEY (post_id, product_id),
      FOREIGN KEY (post_id) REFERENCES engagement_post(id),
      FOREIGN KEY (product_id) REFERENCES engagement_post_product(id)
    );
  `);
};

createEngagementPostProductMappingTable();

module.exports = pool;

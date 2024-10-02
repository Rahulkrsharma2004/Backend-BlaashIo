const { Pool } = require('pg');
const pool = require('../config/db');

const createEngagementPostProductTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS engagement_post_product (
      id SERIAL PRIMARY KEY,
      product_name VARCHAR(255) NOT NULL,
      product_image VARCHAR(255),
      sku VARCHAR(255),
      tenant_id INT NOT NULL
    );
  `);
};

createEngagementPostProductTable();

module.exports = pool;

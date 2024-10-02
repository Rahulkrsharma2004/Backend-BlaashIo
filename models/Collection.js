const { Pool } = require('pg');
const pool = require('../config/db');

const createCollectionTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS collection (
      id SERIAL PRIMARY KEY,
      collection_name VARCHAR(255) NOT NULL
    );
  `);
};

createCollectionTable();

module.exports = pool;

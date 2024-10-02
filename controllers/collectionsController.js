const pool = require('../db');

exports.createCollection = async (req, res) => {
  const { collection_name, post_ids } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO collection (collection_name) VALUES ($1) RETURNING id',
      [collection_name]
    );
    const collectionId = result.rows[0].id;
    post_ids.forEach(async (postId) => {
      await pool.query(
        'INSERT INTO engagement_post_collection (post_id, collection_id, duration_in_seconds) VALUES ($1, $2, $3)',
        [postId, collectionId, 0]
      );
    });
    res.status(201).send('Collection created and posts added');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

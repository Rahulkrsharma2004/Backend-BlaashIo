const pool = require('../db');

exports.getPosts = async (req, res) => {
  const { tenant_id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM engagement_post WHERE tenant_id = $1',
      [tenant_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTopViewedPosts = async (req, res) => {
  const { tenant_id } = req.params;
  try {
    const result = await pool.query(
      `SELECT ep.thumbnail_title, epc.url
       FROM engagement_post ep
       JOIN engagement_post_content epc ON ep.id = epc.post_id
       WHERE ep.tenant_id = $1
       ORDER BY ep.views DESC
       LIMIT 5`,
      [tenant_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

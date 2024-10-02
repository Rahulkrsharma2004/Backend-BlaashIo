const pool = require('../db');

exports.createProduct = async (req, res) => {
  const { product_name, product_image, sku } = req.body;
  try {
    await pool.query(
      'INSERT INTO engagement_post_product (product_name, product_image, sku) VALUES ($1, $2, $3)',
      [product_name, product_image, sku]
    );
    res.status(201).send('Product created');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTopViewedProducts = async (req, res) => {
  const { tenant_id } = req.params;
  try {
    const result = await pool.query(
      `SELECT epp.product_name, epc.url, SUM(epc.duration_in_seconds) / 3600 AS duration_watched
       FROM engagement_post_product epp
       JOIN engagement_post_product_mapping eppm ON epp.id = eppm.product_id
       JOIN engagement_post_content epc ON eppm.post_id = epc.post_id
       WHERE epp.tenant_id = $1
       GROUP BY epp.product_name, epc.url
       ORDER BY duration_watched DESC
       LIMIT 5`,
      [tenant_id]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

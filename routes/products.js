const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.post('/products', productsController.createProduct);
router.get('/products/top/:tenant_id', productsController.getTopViewedProducts);

module.exports = router;

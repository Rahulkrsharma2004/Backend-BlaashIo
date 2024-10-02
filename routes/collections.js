const express = require('express');
const router = express.Router();
const collectionsController = require('../controllers/collectionsController');

router.post('/collections', collectionsController.createCollection);

module.exports = router;

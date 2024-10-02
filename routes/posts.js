const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/posts/:tenant_id', postsController.getPosts);
router.get('/posts/top/:tenant_id', postsController.getTopViewedPosts);

module.exports = router;

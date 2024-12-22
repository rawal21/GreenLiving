const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recommendationController');

// Route to fetch recommendations based on carbon footprint
router.get('/', getRecommendations);

module.exports = router;

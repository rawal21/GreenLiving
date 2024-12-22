const express = require('express');
const { getCarbonFootprint , getHistory } = require('../controllers/carbonController');
const protect= require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @route   POST /api/carbon/calculate
 * @desc    Calculate carbon footprint
 * @access  Protected
 */
router.post('/calculate', protect, getCarbonFootprint);
router.get('/history', protect, getHistory);

module.exports = router;

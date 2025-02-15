const express = require('express');
const router = express.Router();
const { logPeriod, getPeriods } = require('../controllers/periodController');

// Fix: Remove `/tracker`, keep it clean and RESTful
router.post('/', logPeriod);
router.get('/', getPeriods);

module.exports = router;

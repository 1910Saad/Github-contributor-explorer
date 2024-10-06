const express = require('express');
const { getContributors } = require('../controllers/contributorsController');

const router = express.Router();

// GET /api/contributors - Fetch contributors for the repository
router.get('/', getContributors);

module.exports = router;

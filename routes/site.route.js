const express = require('express');
const router = express.Router();

const siteController = require('../controllers/site.controller');

router.get('/search', siteController.search );
router.get('/', siteController.index );

module.exports = router;
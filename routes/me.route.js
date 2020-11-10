const express = require('express');
const router = express.Router();

const meController = require('../controllers/me.controller');

router.get('/stored/books', meController.storedBooks );
router.get('/trash/books', meController.trashBooks );

module.exports = router;
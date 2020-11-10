const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books.controller');

router.get('/create', booksController.create );
router.post('/store', booksController.store );
router.get('/:id/edit', booksController.edit );
router.put('/:id', booksController.update );
router.delete('/:id', booksController.delete );
router.delete('/:id/force', booksController.forceDelete );
router.patch('/:id/restore', booksController.restore );
router.get('/:slug', booksController.show );
router.get('/', booksController.index );

module.exports = router;
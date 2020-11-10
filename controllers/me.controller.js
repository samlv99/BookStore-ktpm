const book = require('../models/books.model');
const { multilMongooseToObject, mongooseToObject } = require('../util/mongoose');

class BooksController {

    // [GET] /me/stored/books
    storedBooks(req, res, next) {
        book.find({})
            .then(books => {
                res.render('me/stored-books', { 
                    books: multilMongooseToObject(books) 
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/books
    trashBooks(req, res, next) {
        book.findDeleted({})
            .then(books => {
                res.render('me/trash-books', { 
                    books: multilMongooseToObject(books) 
                });
            })
            .catch(next);
    }
}

module.exports = new BooksController;
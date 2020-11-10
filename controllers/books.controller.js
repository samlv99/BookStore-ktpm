const book = require('../models/books.model');
const { multilMongooseToObject, mongooseToObject } = require('../util/mongoose');

class BooksController {

    // [GET] /books
    index(req, res, next) {

        book.find({})
            .then(books => {
                res.render('books/books', { 
                    books: multilMongooseToObject(books) 
                });
            })
            .catch(next);

    }

    // [GET] /books/:slug
    show(req, res, next) {
        // res.send('/books/:slug' + req.params.slug);

        book.findOne({ slug: req.params.slug })
            .then(book => res.render('books/bookdetail', {
                book: mongooseToObject(book)
            }))
            .catch(next);

    }

    //[GET] /books/create
    create(req, res, next) {
        res.render('books/createbook');
    }

    //[POST] /books/store
    store(req, res, next) {
        const formData = {...req.body};
        const course = new book(formData);
        course.save()
            .then(() => res.redirect('/books'))
            .catch(err => {});
    }

    //[GET] /books/:id/edit
    edit(req, res, next) {
        book.findById(req.params.id)
            .then(book => res.render('books/editbook', {
                book: mongooseToObject(book)
            }))
            .catch(next);
    }

    //[PUT] /books/:id
    update(req, res, next) {
        book.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/books'))
            .catch(next);
    }

    //[DELETE] /books/:id
    delete(req, res, next) {
        book.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[DELETE] /books/:id/force
    forceDelete(req, res, next) {
        book.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[PATCH] /books/:id/restore
    restore(req, res, next) {
        book.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new BooksController;
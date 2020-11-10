

class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
        // res.render('news', {layout: false});
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('/news/:slug');
    }
}

module.exports = new NewsController;
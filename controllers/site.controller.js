
class SiteController {

    // [GET] /
    index(req, res, next) {
        res.render('home');
    }
    // index(req, res, next) {

    //     Course.find({})
    //         .then(courses => {
    //             res.render('home', { 
    //                 courses: multilMongooseToObject(courses) 
    //             });
    //         })
    //         .catch(next);

    // }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
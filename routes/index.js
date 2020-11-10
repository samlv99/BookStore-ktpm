const newsRoute = require('./news.route');
const siteRoute = require('./site.route');
const booksRoute = require('./books.route');
const meRoute = require('./me.route');

function route(app) {
       
    app.use('/news', newsRoute);
    app.use('/books', booksRoute);
    app.use('/me', meRoute);
    app.use('/', siteRoute);
    
}

module.exports = route;
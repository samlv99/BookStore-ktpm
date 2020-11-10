//Require modules
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const route = require('./routes');

// environment variable
require('dotenv').config();
const db = require('./config/db/index');

//Create an instance of express
const app = express();

//port
const port = process.env.PORT || 3000;

//Add static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body-parser
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//Method Override
app.use(methodOverride('_method'));

//Connect to db
db.connect();

//HTTP logger
app.use(morgan('combined'));

//Template engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
app.engine('.hbs', exphbs({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', '.hbs');

// Route init
route(app);

//Listen server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
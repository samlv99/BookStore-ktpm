const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');
var mongooseDelete = require('mongoose-delete');

const book = new Schema({
  avatar: { type: String },
  name: { type: String },
  author: String,
  priceRegular: String,
  saleOff: String,
  finalPrice: String,
}, {
    timestamps: true
});

//Add plugin
book.plugin(URLSlugs('name'));
book.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('book', book);


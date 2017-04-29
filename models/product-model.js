const mongoose = require('mongoose');

const Review = require ('./review-model.js');

const Schema = mongoose.Schema;

const errorName = "Please enter your name";

const productSchema = new Schema({
  name: { type: String, required: [true, 'Please give the product name.'] },
  price: { type: Number, default: 0 },
  imageUrl: { type: String, default: '/images/box.gif' },
  description: { type: String },
  reviews: [ Review.schema  ]
});

const Product = mongoose.model('Product', productSchema);


module.exports = Product;

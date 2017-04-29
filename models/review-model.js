const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: { type: String, default: 'Be the first leaving a review for this product' },
  starts: { type: Number, default: 5 },
  author: { type: String, deafult: "Anonymus" },
  product: { type: Schema.Types.ObjectId }
});

const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;

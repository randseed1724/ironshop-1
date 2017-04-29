const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: { type: String, required: true, maxlength: 400 },
  stars: { type: Number, required: true , min: 1, max:5},
  author: { type: String, deafult: "Anonymus" },
  product: { type: Schema.Types.ObjectId }
});

const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;

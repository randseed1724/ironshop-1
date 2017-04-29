const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: { type: String, required: [true, "Content is required"], maxlength: [400, "Type less."] },
  stars: { type: Number, required: true , min: [1, 'Sould be more than 1'], max: [5, 'Sould be less than 5']},
  author: { type: String, deafult: "Anonymus" },
});

const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;

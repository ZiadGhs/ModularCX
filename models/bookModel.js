const mongoose = require('mongoose');

const bookSchema =  new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true
  },
  ISBN: {
    type: String,
    unique: true,
    required: true
  },
  genre: {
    type: [String],
  },
  pages: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
  },
  description: {
    type: String,
  },
  coverImage: {
    type: String, // URL to the cover image
  },
  ratings: [{
 
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    review: {
      type: String,
    }
  }],

},
{timestamp: true});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

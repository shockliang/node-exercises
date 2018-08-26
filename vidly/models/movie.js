const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("./genre");

const Movie = mongoose.model(
  "Movie",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
    },
    genre: genreSchema,
    numberInStock: {
      type: Number,
      required: true,
      default: 0
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      default: 0
    }
  })
);

function validateMovie(movie) {
  const schema = {
    title: Joi.string()
      .required()
      .min(3)
      .max(100),
    genre: Joi.object.require(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required()
  };

  return Joi.validate(movie, schema);
}

module.exports.Movie = Movie;
module.exports.validate = validateMovie;

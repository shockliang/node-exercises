const asyncMiddleware = require("../middlewares/async");
const auth = require("../middlewares/auth");
const { Movie, validate } = require("../models/movie");
const { Genre } = require("../models/genre");
const express = require("express");
const router = express.Router();

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const movies = await Movie.find().sort("name");
    res.send(movies);
  })
);

router.post(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send("Invalid genre");

    const movie = new Movie({
      title: req.body.title,
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
      genre: {
        _id: genre._id,
        name: genre.name
      }
    });

    await movie.save();
    res.send(movie);
  })
);

router.put(
  "/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send("Invalid genre");

    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate,
        genre: {
          _id: genre._id,
          name: genre.name
        }
      },
      { new: true }
    );

    if (!movie)
      return res.status(404).send("The movie with the given id was not found");

    res.send(movie);
  })
);

router.delete(
  "/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie)
      return res
        .status(404)
        .send(`The movie with the given ID:${req.params.id} was not found.`);

    res.send(movie);
  })
);

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie)
      return res
        .status(404)
        .send(`The movie with the given ID:${req.params.id} was not found.`);

    res.send(movie);
  })
);

module.exports = router;

require("express-async-errors");
const validateObjectId = require("../middlewares/validateObjectId");
const mongoose = require("mongoose");
const admin = require("../middlewares/admin");
const auth = require("../middlewares/auth");
const { Genre, validate } = require("../models/genre");
const express = require("express");
const router = express.Router();
const winston = require("winston");

router.get("/", async (req, res) => {
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = new Genre({ name: req.body.name });

  await genre.save();
  res.send(genre);
});

router.put("/:id", [auth, validateObjectId], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  winston.info(req.params);
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!genre)
    return res.status(404).send("The genre with the given id not found");

  res.send(genre);
});

router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);
  if (!genre)
    return res
      .status(404)
      .send(`The genre with the given ID:${req.params.id} was not found.`);

  res.send(genre);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  if (!genre)
    return res
      .status(404)
      .send(`The genre with the given ID:${req.params.id} was not found.`);

  res.send(genre);
});

module.exports = router;

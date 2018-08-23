const mongoose = require("mongoose");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to MongoDb..."))
  .catch(error => console.log("Could not connect to MongoDb", error));

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  }
});

const Genre = mongoose.model("Genre", genreSchema);

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" }
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.post("/", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  createGenre(req.body.name).then(result => {
    console.log(result);
    res.send(result);
  });
});

router.put("/:id", (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

router.get("/:id", (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

async function createGenre(name) {
  const genre = new Genre({
    // id: genres.length + 1,
    name: name
  });

  try {
    const result = await genre.save();
    // console.log(result);
    return result;
  } catch (ex) {
    console.log(ex.errors);
  }
}

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(genre, schema);
}

module.exports = router;

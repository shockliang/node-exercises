const monent = require("moment");
const auth = require("../middlewares/auth");
const { Rental, validate } = require("../models/rental");
const { Movie } = require("../models/movie");
const express = require("express");
const router = express.Router();
const winston = require("winston");

router.post("/", auth, async (req, res) => {
  if (!req.body.customerId)
    return res.status(400).send("customerId not provided.");
  if (!req.body.movieId) return res.status(400).send("movieId not provided.");

  const rental = await Rental.findOne({
    "customer._id": req.body.customerId,
    "movie._id": req.body.movieId
  });

  if (!rental) return res.status(404).send("Rental not found.");

  if (rental.dateReturned)
    return res.status(400).send("Return already processed.");

  rental.dateReturned = new Date();
  const rentalDays = monent().diff(rental.dateOut, "days");
  rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;
  await rental.save();

  await Movie.update(
    { _id: rental.movie._id },
    {
      $inc: { numberInStock: 1 }
    }
  );

  return res.status(200).send();
});

module.exports = router;

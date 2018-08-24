const mongoose = require("mongoose");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    isGold: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    phone: {
      type: Number,
      required: true
    }
  })
);

module.exports = router;

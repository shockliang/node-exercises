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
      minlength: 3,
      maxlength: 50
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20
    }
  })
);

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");

  res.send(customers);
});

router.post("/", async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({
    isGold: req.body.isGold,
    name: req.body.name,
    phone: req.body.phone
  });

  customer = await customer.save();
  res.send(customer);
});

router.put("/:id", async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      isGold: req.body.isGold,
      name: req.body.name,
      phone: req.body.phone
    },
    { new: true }
  );

  if (!customer)
    return res.status(404).send("The customer with the given id was not found");

  res.send(customer);
});

router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer)
    return res
      .status(404)
      .send(`The customer with the given ID:${req.params.id} was not found.`);

  res.send(customer);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer)
    return res
      .status(404)
      .send(`The customer with the given ID:${req.params.id} was not found.`);

  res.send(customer);
});

function validateCustomer(Customer) {
  const schema = {
    isGold: Joi.boolean().required(),
    name: Joi.string()
      .min(3)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(20)
      .required()
  };

  return Joi.validate(Customer, schema);
}

module.exports = router;

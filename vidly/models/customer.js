const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    isGold: {
      type: Boolean,
      default: false,
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

function validateCustomer(Customer) {
  const schema = {
    isGold: Joi.boolean().required(),
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(Customer, schema);
}

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;

const express = require("express");
const router = express.Router();
const winston = require("winston");

router.post("/", async (req, res) => {
  res.status(401).send("Unauthorized");
});

module.exports = router;

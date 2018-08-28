const mongoose = require("mongoose");

const id = new mongoose.Types.ObjectId();
console.log(id);
console.log(`Timestamp: ${id.getTimestamp()}`);

console.log(`object id is valid:${mongoose.Types.ObjectId.isValid("1234")}`);

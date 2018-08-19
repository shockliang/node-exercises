// Main purposes
// Get all the published courses that are $15 or more
// or have the word 'by' in their title.

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDb..."))
  .catch(error => console.log("Could not connect to MongoDb", error));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  return await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by*./i }])
    .sort({ price: -1 }) // also coluld '-price'
    .select({ name: 1, author: 1 , price: -1}); // also could be 'name author'
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();

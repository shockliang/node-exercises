// Main purposes
// Get all the published backend courses,
// sort them by their name,
// pick only their name and author,
// and display them.

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
  return await Course
    .find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 }) // also could be '-name'
    .select({ name: 1, author: 1 }); // also could be 'name author'
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();

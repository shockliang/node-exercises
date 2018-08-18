const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDb..."))
  .catch(error => console.log("Could not connect to MongoDb", error));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular course",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course
    // .find({ author: "Mosh", isPublished: true })
    // .find({ price: { $gte: 10, $lte: 20 } }) // the price should be 10 to 20 dollars.
    // .find({ price: { $in: [10, 15, 20] } }) // the price should be 10 or 15 or 20 dollars.
    .find()
    // .or([{ author: "Mosh" }, { isPublished: true }])
    .and([{ author: "Mosh" }, { isPublished: true }])
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDb..."))
  .catch(error => console.log("Could not connect to MongoDb", error));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
    lowercase: true,
    // uppercase: true,
    trim: true
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: async function(v, callback) {
        setTimeout(() => {
          // Do some async work
          const result = v && v.length > 0;
          callback(result);
        }, 1000);
      },
      message: "A course should have at least one tag."
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function() {
      return this.isPublished;
    },
    min: 10,
    max: 200,
    get: v => Math.round(v),
    set: v => Math.round(v)
  }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular course",
    category: "Web   ",
    author: "Mosh",
    tags: ["frontend"],
    isPublished: true,
    price: 15.4
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[field]);
  }
}

async function getCourses() {
  // For simualtes api calling - /api/courses?pageNumber=2&pageSize=10
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find({ _id: "5b7d69233bcef53665adaa9c" })
    // .skip((pageNumber - 1) * pageSize)
    // .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 , price: 1});
  console.log(courses[0].price);
}

// async function updateCourse(id) {
//   const result = await Course.update(
//     { _id: id },
//     {
//       $set: {
//         author: "Mosh",
//         isPublished: false
//       }
//     }
//   );

//   console.log("Result", result);
// }

async function updateCourse(id) {
  const course = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Jason",
        isPublished: false
      }
    },
    { new: true }
  );

  console.log("Result", course);
}
async function removeCourse(id) {
  // const result = await Course.deleteOne({ _id: id });
  const course = await Course.findByIdAndRemove(id);

  console.log("Result", result);
}

// createCourse();
getCourses();

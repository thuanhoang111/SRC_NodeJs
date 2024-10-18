import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Course = new Schema({
  _id: String,
  credit: Number,
  description: String,
  instructions: Array,
  title: String,
});
const courseModel = mongoose.model("Course", Course);
export { courseModel };

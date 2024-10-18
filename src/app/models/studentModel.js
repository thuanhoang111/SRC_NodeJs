import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "please enter firstName "],
    },
    lastName: {
      type: String,
      require: [true, "please enter lastName "],
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    registeredCourse: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const StudentModel = mongoose.model("Student", StudentSchema);

export { StudentModel };

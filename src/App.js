import express from "express";
import mongoose from "mongoose";
import "./initMongoose.js";
import Student from "./models/StudentModel.js";
import APIFeature from "./utils/utis.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000, () => {
  console.log("http://localhost:3000/");
});

app.get("/api/student", async (req, res) => {
  try {
    // const studentMain = await Student.find({});
    // console.log(studentMain);

    // res.status(200).json(studentMain);
    const apiFeatures = new APIFeature(Student.find(), req.query)
      .search()
      .filter()
      .sorting();
    let newss = await apiFeatures.query;
    const filteredCount = newss.length;
    apiFeatures.pagination();
    newss = await apiFeatures.query.clone();

    res.status(200).json({
      filteredCount,
      newss,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/student/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentMain = await Student.findById(studentId);
    console.log(studentMain);

    res.status(200).json(studentMain);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.delete("/api/student/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const statusDelete = await Student.deleteOne({ _id: studentId });
    res
      .status(200)
      .json({ message: `Đã xóa thành công : ${statusDelete.deletedCount}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/api/student", async (req, res) => {
  try {
    console.log(req);
    const studentMain = await Student.create(req.body);
    res.status(200).json({ message: "Thêm mới thành công " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.put("/api/student/:studentId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const studentMain = await Student.findByIdAndUpdate(studentId, req.body);

    res.status(200).json(studentMain);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/", (req, res) => {
  res.send("alskdjlaks");
});

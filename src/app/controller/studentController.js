import { StudentModel } from "../models/studentModel.js";
import APIFeature from "../../utils/utis.js";

class StudentController {
  async index(req, res) {
    try {
      const apiFeatures = await new APIFeature(StudentModel.find(), req.query)
        .search()
        .filter()
        .sorting();
      let students = apiFeatures.query;
      const filteredCount = students.length;
      apiFeatures.pagination();
      students = apiFeatures.query.clone();

      res.status(200).json({
        filteredCount,
        students,
      });
    } catch (error) {
      console.log("indeex");

      res.status(400).json({ message: error.message });
    }
  }

  async findById(req, res) {
    try {
      const studentId = req.params.id;
      const studentMain = StudentModel.findById(studentId);
      res.status(200).json(studentMain);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  add(req, res) {
    try {
      console.log(req);
      const studentMain = StudentModel.create(req.body);
      res.status(201).json({ message: "Thêm mới thành công " });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  deleteById(req, res) {
    try {
      const studentId = req.params.id;
      const statusDelete = StudentModel.deleteOne({ _id: studentId });
      res
        .status(200)
        .json({ message: `Đã xóa thành công : ${statusDelete.deletedCount}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  updateById(req, res) {
    try {
      const studentId = req.params.id;
      const studentMain = StudentModel.findByIdAndUpdate(studentId, req.body);

      res.status(200).json(studentMain);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async all(req, res) {
    const result = await StudentModel.find({});
    console.log("🚀 ~ StudentController ~ all ~ result:", result);
    res.status(200).json({ asda: result });
  }
}
const studentController = new StudentController();
export { studentController };

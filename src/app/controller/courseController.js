import APIFeature from "../../utils/utis.js";
import { courseModel } from "../models/courseModel.js";
class coursesController {
  async index(req, res) {
    try {
      const apiFeatures = new APIFeature(courseModel.find({}), req.query)
        .search()
        .filter()
        .sorting();
      let students = await apiFeatures.query;
      const filteredCount = students.length;
      apiFeatures.pagination();
      students = await apiFeatures.query.clone();

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
      const courseId = req.params.id;
      const courseMain = courseModel.findById(courseId);
      res.status(200).json(courseMain);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async add(req, res) {
    try {
      const courseMain = await courseModel.create(req.body);
      res.status(201).json({ message: "Thêm mới thành công " });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async deleteById(req, res) {
    try {
      const courseId = req.params.id;
      const statusDelete = await courseModel.deleteOne({ _id: courseId });
      res
        .status(200)
        .json({ message: `Đã xóa thành công : ${statusDelete.deletedCount}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateById(req, res) {
    try {
      const courseId = req.params.id;
      const courseMain = await courseModel.findByIdAndUpdate(
        courseId,
        req.body
      );

      res.status(200).json(courseMain);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async all(req, res) {
    const result = await courseModel.find({});
    console.log("🚀 ~ StudentController ~ all ~ result:", result);
    res.status(200).json({ asda: result });
  }
}
const Course = new coursesController();
export { Course };

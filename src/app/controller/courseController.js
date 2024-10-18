import { courseModel } from "../models/courseModel.js";
class coursesController {
  index(req, res) {
    courseModel.find({}).then((data) => {
      res.json(data);
    });
  }
}
const Course = new coursesController();
export { Course };

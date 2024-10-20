import express from "express";
import { Course } from "../app/controller/courseController.js";

const routerCourse = express.Router();

routerCourse.post("/add", Course.add);
routerCourse.use("/all", Course.all);
routerCourse.use("/:id", Course.findById);
routerCourse.put("/:id", Course.updateById);
routerCourse.delete("/:id", Course.deleteById);
routerCourse.use("/", Course.index);
export { routerCourse };

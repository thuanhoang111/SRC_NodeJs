import express from "express";
import { Course } from "../app/controller/courseController.js";

const routerCourse = express.Router();

routerCourse.post("/add", Course.add);
routerCourse.get("/all", Course.all);
routerCourse.get("/:id", Course.findById);
routerCourse.put("/:id", Course.updateById);
routerCourse.delete("/:id", Course.deleteById);
routerCourse.get("/", Course.index);
export { routerCourse };

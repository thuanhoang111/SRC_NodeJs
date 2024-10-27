import express from "express";
import { Course } from "../app/controller/courseController.js";
import { authenticateToken } from "../utils/JWT.js";

const routerCourse = express.Router();

routerCourse.post("/add", authenticateToken, Course.add);
routerCourse.get("/all", authenticateToken, Course.all);
routerCourse.get("/:id", authenticateToken, Course.findById);
routerCourse.put("/:id", authenticateToken, Course.updateById);
routerCourse.delete("/:id", authenticateToken, Course.deleteById);
routerCourse.get("/", authenticateToken, Course.index);
export { routerCourse };

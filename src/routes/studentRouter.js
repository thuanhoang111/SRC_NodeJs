import express from "express";
import { studentController } from "../app/controller/studentController.js";
import { authenticateToken } from "../utils/JWT.js";
const routerStudent = express.Router();
routerStudent.post("/add", authenticateToken, studentController.add);
routerStudent.get("/all", authenticateToken, studentController.all);
routerStudent.get("/:id", authenticateToken, studentController.findById);
routerStudent.put("/:id", authenticateToken, studentController.updateById);
routerStudent.delete("/:id", authenticateToken, studentController.deleteById);
routerStudent.get("/", authenticateToken, studentController.index);
export { routerStudent };

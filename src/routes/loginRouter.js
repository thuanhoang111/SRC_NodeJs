import express from "express";
import { authenticateToken } from "../utils/JWT.js";
import { auth } from "../app/controller/authController.js";
const loginRouter = express.Router();

loginRouter.post("/", auth.login);
loginRouter.get("/verify", authenticateToken, auth.verify);
loginRouter.post("/token", auth.refreshToken);
export { loginRouter };

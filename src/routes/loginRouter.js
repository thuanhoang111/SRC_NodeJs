import express from "express";
import { authenticateToken, generateAccessToken } from "../utils/JWT.js";
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  const { userId, password } = req.body;
  const token = generateAccessToken({
    userId,
    password,
  });
  res.status(200).json({ token });
});
loginRouter.get("/verify", authenticateToken, (req, res) => {
  // const { userId, password } = req.body;
  // const token = generateAccessToken({
  //   userId,
  //   password,
  // });
  res.status(200).json({ result: req.inforUser });
});
export { loginRouter };

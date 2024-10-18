import express from "express";
import "./initMongoose.js";
import morgan from "morgan";
import { route } from "./routes/index.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
// tạo route
route(app);
app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
app.use("/", (req, res) => {
  res.send("asda");
});

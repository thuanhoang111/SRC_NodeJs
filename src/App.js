import express from "express";
import "./initMongoose.js";
import morgan from "morgan";
import { route } from "./routes/index.js";
import "dotenv/config.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// tạo route
route(app);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:3000/");
});
app.use("/", (req, res) => {
  res.send("asda");
});

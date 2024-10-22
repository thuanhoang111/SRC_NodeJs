import { routerCourse } from "./courseRouter.js";
import { loginRouter } from "./loginRouter.js";
import { routerStudent } from "./studentRouter.js";
function route(app) {
  app.use("/course", routerCourse);
  app.use("/student", routerStudent);
  app.use("/login", loginRouter);
}

export { route };

import { routerCourse } from "./courseRouter.js";
import { routerStudent } from "./studentRouter.js";
function route(app) {
  app.use("/course", routerCourse);
  app.use("/student", routerStudent);
}

export { route };

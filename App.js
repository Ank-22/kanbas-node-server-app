import express from 'express';
import Hello from './Hello.js';
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from './Kanbas/modules/routes.js';
import Lab5 from './Lab5.js';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app)
Hello(app)
app.listen(4000);
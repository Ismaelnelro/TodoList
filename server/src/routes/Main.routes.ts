import { Router } from "express";
import UserRouter from "./user.routes";
import TaskRouter from "./task.routes";

const MainRoute = Router();

MainRoute.use('/users', UserRouter)
MainRoute.use('/tasks', TaskRouter)

export default MainRoute
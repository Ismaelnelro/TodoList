import { Router } from 'express'
import { deleteTask, getTasks, postTask, putTask } from '../controllers/task.controllers';

const TaskRouter = Router();

TaskRouter.get("", getTasks)
TaskRouter.post("", postTask)
TaskRouter.put("/:id", putTask)
TaskRouter.delete("", deleteTask)


export default TaskRouter;
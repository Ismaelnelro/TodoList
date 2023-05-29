import { Request, Response } from "express"
import { ITask } from "../interfaces/Task"
import Task from "../models/Task";
import TaskService from "../service/TaskService";

interface _Request extends Request {
  body: ITask
}
const taskService = new TaskService()

const getTasks = async (req: _Request, res: Response) => {
  const { limit = '5', to = '0' } = req.query
  const userId: string | undefined = Array.isArray(req.headers['user-id']) ? req.headers['user-id'][0] : req.headers['user-id'];

  try {
    if (userId) {
      const { total, tasksByUserId } = await taskService.getTasks(limit.toString(), to.toString(), userId)
      if (tasksByUserId.length > 0) res.status(200).json({ total, tasksByUserId })
      else res.status(401).json('Not found')
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }

}

const putTask = (req: _Request, res: Response) => {
  const id = req.params
  const {
    title,
    description,
    created_at,
    due_date,
    completed,
    category,
    reminder,
    file,
    user_id
  } = req.body

  res.json({
    msg: "Obteniendo todas las task"
  })
}

const postTask = async (req: _Request, res: Response) => {
  try {
    const result = await taskService.CreateTask(req.body)
    if (result.error) res.status(400).json({ error: result.error });
    else res.status(200).json(result.msg)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

const deleteTask = (req: Request, res: Response) => {
  res.json({
    msg: "Obteniendo todas las task"
  })
}


export {
  getTasks,
  putTask,
  postTask,
  deleteTask
}
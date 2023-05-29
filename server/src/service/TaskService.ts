import { TabList } from "@tremor/react";
import { ITask } from "../interfaces/Task";
import Task from "../models/Task";

class TaskService {

  async CreateTask(task: ITask) {
    try {
      if (!task || !task.user_id) {
        return {
          error: "Invalid task data. Task object is required."
        };
      }
      const newTask = new Task(task);
      await newTask.save()
      return {
        msg: "Task created successfully"
      };

    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async getTasks(limit: string, to: string, userId: string) {

    try {
      const [total, tasks] = await Promise.all([
        Task.count(),
        await Task.find()
          .skip(Number(to))
          .limit(Number(limit))
      ])
      const tasksByUserId = tasks.filter((task) => task.user_id.toString() === userId);
      return {
        total,
        tasksByUserId
      }
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
}

export default TaskService;
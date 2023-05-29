import { MTask } from "../models/MTask";
import { Task, TaskCRUD } from "../util/typeAndInterfaces";

export class ServiceTask implements TaskCRUD {

  public create(task: Task): Task | undefined {
    let newTask;
    try {
      newTask = new MTask(task);
      // localStorage.setItem("tareas", JSON.stringify(newTask));
      return newTask;
    } catch (error) {
      console.log(error);
    }
  }

  public getTask(id: number) {
    try {
      const taskString = localStorage.getItem("tareas");

      if (taskString !== null) {
        const task: Task = JSON.parse(taskString);
        if (task.id === id) {
          console.log(task);
        }
      } else {

      }
    } catch (error) {
      console.log(error);

    }
  }
}
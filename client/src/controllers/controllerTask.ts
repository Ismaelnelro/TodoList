import { ServiceTask } from "../service/ServiceTask";
import { Task } from "../util/typeAndInterfaces";

export class ControllerTask {
  private service;
  constructor() {
    this.service = new ServiceTask()
  }


  create(T: Task) {
    try {
      const newTask = this.service.create(T)
      console.log(newTask);

    } catch (error) {
    }
  }

  getTask(id: number) {
    try {
      const newTask = this.service.getTask(id)
    } catch (error) {
    }
  }




}
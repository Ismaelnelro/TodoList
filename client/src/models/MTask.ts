import { Task } from "../util/typeAndInterfaces";

export class MTask implements Task {

  id: number;
  title: string;
  description: string;
  completed: boolean;
  creationDate: Date;
  dueDate: Date;
  locked: boolean;

  constructor(task: Task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.completed = false;
    this.creationDate = task.creationDate;
    this.dueDate = task.dueDate;
    this.locked = true;
  }

  getPropertyValue<K extends keyof Task>(property: K): Task[K] {
    return this[property] as Task[K];
  }

  setPropertyValue<K extends keyof Task>(property: K, value: Task[K]): void {
    (this as any)[property] = value;
  }

}

import { Task } from "../util/typeAndInterfaces";

function CreateTask(task: Task) {
  try {
    /**
     * 1) impacto en la base de datos
     * 2) recibo un objeto con una informacion
    */

    const storageData = localStorage.getItem("tarea")
    if (storageData !== null) {
      const tasks = JSON.parse(storageData);
      tasks.push(task)
      localStorage.setItem("tarea", JSON.stringify(tasks))
      
    }else{
      let tasks: Task[] = [];
      tasks.push(task)
      localStorage.setItem("tarea", JSON.stringify(tasks))
    }

    return {
      status: 201,
      task
    }
  } catch (error) {

  }
}


function GetTask(id: number) {
  try {
    /**
     * 1) pido en la base de datos una info
     * 2) recibo un objeto con una informacion
     */

    const data = localStorage.getItem("tarea");
    if (data !== null) {
      const task: Task = JSON.parse(data);
      if (task.id === id) {
        return {
          status: 201,
          task
        }
      } else {
        return {
          status: 401
        }
      }
    }

  } catch (error) {

  }
}


function GetTaskByDay(day: string) {
  const data = localStorage.getItem("tarea");

  if (data !== null) {
    const dataTask: Task[] = JSON.parse(data);
    const tasks: Task[] = dataTask.filter((task) => task.day === day)
    return {
      status: 201,
      tasks
    }
  } else {
    return {
      status: 401
    }
  }
}

export {
  CreateTask,
  GetTask,
  GetTaskByDay
};
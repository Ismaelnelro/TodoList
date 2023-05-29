import './App.css'
import HomePage from './pages/HomePage';
import { CreateTask, GetTask } from './service/Service';
import { Task } from './util/typeAndInterfaces';

function App() {

  const createNota = () => {
    const newTask: Task = {
      id: 3,
      title: "task title3",
      description: "task description",
      completed: false,
      creationDate: new Date(),
      dueDate: new Date(),
      locked: true,
      day:"Monday"
    }
    const data = CreateTask(newTask);
    console.log(data);
  }

  const obtenerTarea = () => {
    const data = GetTask(2);
    console.log(data);
  }


  return (
    <>
      <button onClick={createNota}>Crear nota</button>
      <button onClick={obtenerTarea}>Obtener tarea</button>
      <HomePage />
    </>
  )
}

export default App

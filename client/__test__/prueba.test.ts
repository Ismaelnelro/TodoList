import { CreateTask, GetTask } from '../src/service/Service'

describe('Pruebas sobre la task', () => {
  const task = {
    id: 1,
    title: 'task title',
    description: 'task description',
    completed: false,
    creationDate: new Date(),
    dueDate: new Date(),
    locked: true,
  }

  it('should store the task in localStorage and return status 201', () => {
    const result = CreateTask(task);
    expect(result).toEqual({
      status: 201,
      task
    })
  })

  it('should return the task acordind to id', () => {
    localStorage.setItem('tarea', JSON.stringify(task))
    const result = GetTask(1);

    const expectedTask = {
      ...task,
      creationDate: task.creationDate.toISOString(),
      dueDate: task.dueDate.toISOString(),
    }

    expect(result).toEqual({
      status: 201,
      task: expectedTask
    })
  })

  it('should return status 401 if id task its not ok', () => {
    localStorage.setItem('tarea', JSON.stringify(task))
    const result = GetTask(2);

    expect(result).toEqual({
      status: 401
    })
  })


})
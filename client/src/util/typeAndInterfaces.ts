export type UserProfile = 'user' | 'admin' | 'guess';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  creationDate: Date;
  dueDate: Date;
  locked: boolean
  day: string
}

export interface User {
  username: string,
  profile: UserProfile;
  task: Task[];
}


export interface TaskCRUD {
  create(task: Task): Task | undefined,
  // read(id: number): Promise<Task | undefined>;
  // update(id: number, update: Partial<Task>, UserProfile: UserProfile): Promise<Task | undefined>
  // delete(id: number): void;
}



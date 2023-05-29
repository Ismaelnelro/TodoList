import { Schema } from "mongoose"

enum category {
  work = "WORK",
  personal = "PERSONAL",
  birthday = "BIRTHDAY",
  none = "NONE"
}

interface ITask {
  title: string,
  description: string,
  due_date: Date,
  created_at: Date,
  reminder: Date,
  completed: boolean,
  file: string,
  category: category
  user_id: Schema.Types.ObjectId
}

export {
  ITask,
  category
}
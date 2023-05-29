import { Schema, model } from "mongoose";
import { ITask, category } from "../interfaces/Task";

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  due_date: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  reminder: {
    type: Date,
  },
  completed: {
    type: Boolean,
    default: false
  },
  file: {
    type: String,
  },
  category: {
    type: String,
    enum: Object.values(category),
    default: category.none
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref:"User",
    required: [true, 'UserId is required']
  }

}, { versionKey: false })


const Task = model<ITask>('Task', TaskSchema)

export default Task; 
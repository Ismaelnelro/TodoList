import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/User";
import { v4 as uuidv4 } from 'uuid'

const UserSchema = new Schema<IUser>({
  avatar: {
    type: String,
    default: 'userdefault.png'
  },
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Name is required"]
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "Name is required"]
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: false
  },
}, { versionKey: false })

const User = model<IUser>("User", UserSchema);
export default User;
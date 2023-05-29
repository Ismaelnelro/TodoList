import { IUser } from "../interfaces/User";
import User from "../models/User";
import bcrypt from 'bcryptjs';

class UserService {
  async createUser(user: IUser) {
    try {
      if (!user) {
        return {
          error: "Invalid user data. User object is required."
        };
      }
      const newUser = new User(user);
      const salt = bcrypt.genSaltSync();
      newUser.password = bcrypt.hashSync(user.password, salt);
      await newUser.save();
      return {
        msg: "User created successfully"
      };

    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async getUsers(limit: string, to: string) {
    try {
      const [total, users] = await Promise.all([
        User.count(),
        await User.find()
          .skip(Number(to))
          .limit(Number(limit))
      ])
      return {
        users,
        total
      }
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }

  async deleteUser(id: string) {
    try {
      if (!id) {
        return {
          error: "Invalid id data. id is required."
        };
      }
      await User.findByIdAndDelete(id)
      return {
        msg: "User deleted successfully"
      };
    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }

  }


  async updateUser(id: string, partialUser: Partial<IUser>) {
    try {
      if (partialUser.password) {
        const salt = bcrypt.genSaltSync();
        partialUser.password = bcrypt.hashSync(partialUser.password, salt);
      }

      const updatedUser = await User.findByIdAndUpdate(id, partialUser, { new: true });
      return {
        msg: "User updated successfully",
        updatedUser
      };

    } catch (error) {
      console.log(error);
      throw new Error(error as string);
    }
  }
}

export default UserService;

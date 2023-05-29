import { Request, Response } from "express"
import { IUser } from "../interfaces/User";

import UserService from "../service/UserService";

interface _Request extends Request {
  body: IUser
}

const service = new UserService();

const getUsers = async (req: _Request, res: Response) => {
  const { limit = '5', to = '0' } = req.query;

  try {
    const { total, users } = await service.getUsers(limit.toString(), to.toString())
    if (users.length > 0) res.status(200).json({ total, users });
    else res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}



const putUser = async (req: _Request, res: Response) => {
  const { id } = req.params;
  // const { _id, isActive, create_at, ...rest } = req.body;
  const { isActive, create_at, ...rest } = req.body;

  try {
    const UpadteUser = await service.updateUser(id, rest);
    if (UpadteUser) res.status(200).json(UpadteUser);
    else res.status(404).json({ msg: "not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}



const postUser = async (req: _Request, res: Response) => {
  try {
    const result = await service.createUser(req.body);
    if (result.error) {
      res.status(400).json({ error: result.error });
    } else {
      res.status(201).json({ msg: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
}


const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const result = await service.deleteUser(id);
    if (result.error) res.status(400).json({ error: result.error })
    else res.status(200).json({ msg: "User deleted successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }

}


export {
  getUsers,
  putUser,
  postUser,
  deleteUser
}
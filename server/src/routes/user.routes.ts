import { Router } from "express";
import { deleteUser, getUsers, postUser, putUser } from "../controllers/user.controllers";
import { checkSchema } from "express-validator";
import { isValidID, validationSchemaRegisterUser } from "../middlewares/models/Valid";
import { validField } from "../middlewares/validField";

const UserRouter = Router();

UserRouter.get("", getUsers)
UserRouter.post("", checkSchema(validationSchemaRegisterUser), validField, postUser)
UserRouter.put("/:id", checkSchema(isValidID), validField, putUser)
UserRouter.delete("/:id", checkSchema(isValidID), validField, deleteUser)

export default UserRouter;
import { Request, Response, NextFunction } from "express";
import { validationResult, Result, ValidationError } from "express-validator";
import { validate } from "uuid";

export const validField = (req: Request, res: Response, next: NextFunction): void => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    return;
  }
  next();
};

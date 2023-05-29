import { Schema } from "express-validator";
import User from "../../models/User";
import { v4 } from 'uuid';

export const validationSchemaRegisterUser: Schema = {
  name: {
    in: ["body"],
    errorMessage: "Name is required",
    isString: true,
    trim: true,
    escape: true,
  },
  email: {
    in: ["body"],
    errorMessage: "Invalid email",
    isEmail: true,
    normalizeEmail: true,
    custom: {
      options: async (email: string) => {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("Email already exists");
        }
        return true;
      },
    },
  },
  password: {
    in: ["body"],
    errorMessage: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one special character",
    isString: true,
    isLength: {
      options: { min: 8 },
    },
    custom: {
      options: (value: string) => {
        const regexLowercase = /[a-z]/;
        const regexUppercase = /[A-Z]/;
        const regexSpecialChar = /[^a-zA-Z0-9]/;

        return regexLowercase.test(value) && regexUppercase.test(value) && regexSpecialChar.test(value);
      },
      errorMessage: "Password must contain at least one lowercase letter, one uppercase letter, and one special character",
    },
  },
};


export const isValidID: Schema = {
  id: {
    in: ['params'],
    notEmpty: {
      errorMessage: 'ID is required',
    },
    isMongoId: {
      errorMessage: 'Invalid ID',
    },
    custom: {
      options: async (id: string) => {
        const user = await User.findById(id);
        if (!user) {
          throw new Error('ID not found');
        }
        return true;
      },
    },
  },
};

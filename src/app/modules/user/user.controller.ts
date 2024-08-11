/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ERROR, SUCCESS } from "../shared/api.response.types";
import { registerSchema, loginSchema } from "./user.schema";
import { UserServices } from "./user.service";
import { IUser } from "./user.interface";

const registerUser = async (req: Request, res: Response) => {
  const validationResult = registerSchema.safeParse(req.body);
  if (!validationResult.success) {
    return ERROR(
      res,
      "Failed to validate User registration data, please provide correct data",
      [validationResult.error.errors],
      400
    );
  }

  try {
    const user = await UserServices.registerUserIntoDB(
      validationResult.data as unknown as IUser
    );
    return SUCCESS(res, "User Registered Successfully", user);
  } catch (error: any) {
    return ERROR(res, "Failed to register User", [error.message], 500);
  }
};

const loginUser = async (req: Request, res: Response) => {
  const validationResult = loginSchema.safeParse(req.body);
  if (!validationResult.success) {
    return ERROR(
      res,
      "Failed to validate User login data, please provide correct data",
      [validationResult.error.errors],
      400
    );
  }

  try {
    const user = await UserServices.loginUserFromDB(validationResult.data);
    return SUCCESS(res, "User Logged in Successfully", user);
  } catch (error: any) {
    return ERROR(res, "Failed to log in User", [error.message], 500);
  }
};


export const UserControllers = {
  registerUser,
  loginUser,
};

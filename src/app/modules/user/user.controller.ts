/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ERROR, SUCCESS } from "../shared/api.response.types";
import { registerSchema, loginSchema } from "./user.schema";
import { UserServices } from "./user.service";
import { IUser } from "./user.interface";
import httpStatus from "http-status";

const registerUser = async (req: Request, res: Response) => {
  const validationResult = registerSchema.safeParse(req.body);
  if (!validationResult.success) {
    return ERROR(
      res,
      400,
      "Failed to validate User registration data, please provide correct data",
      [validationResult.error.errors],
    );
  }

  try {
    const user = await UserServices.registerUserIntoDB(
      validationResult.data as unknown as IUser
    );
    return SUCCESS(res,httpStatus.CREATED, "User Registered Successfully", user);
  } catch (error: any) {
    return ERROR(res, httpStatus.INTERNAL_SERVER_ERROR, "Failed to register User", [error.message]);
  }
};

const loginUser = async (req: Request, res: Response) => {
  const validationResult = loginSchema.safeParse(req.body);
  if (!validationResult.success) {
    return ERROR(
      res,
      httpStatus.NOT_FOUND,
      "Failed to validate User login data, please provide correct data",
      [validationResult.error.errors],
      
    );
  }

  try {
    const user = await UserServices.loginUserFromDB(validationResult.data);
    return SUCCESS(res, httpStatus.OK, "User Logged in Successfully", user);
  } catch (error: any) {
    return ERROR(res, httpStatus.INTERNAL_SERVER_ERROR, "Failed to log in User", [error.message]);
  }
};


export const UserControllers = {
  registerUser,
  loginUser,
};

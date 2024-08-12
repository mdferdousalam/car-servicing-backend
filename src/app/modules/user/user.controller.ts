/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ERROR, SUCCESS } from "../shared/api.response.types";
import { UserServices } from "./user.service";
import httpStatus from "http-status";

const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await UserServices.registerUserIntoDB(req.body);
    return SUCCESS(
      res,
      httpStatus.CREATED,
      "User Registered Successfully",
      user
    );
  } catch (error: any) {
    return ERROR(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      "Failed to register User",
      [error.message]
    );
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await UserServices.loginUserFromDB(req.body);
    return SUCCESS(res, httpStatus.OK, "User Logged in Successfully", user);
  } catch (error: any) {
    return ERROR(
      res,
      httpStatus.INTERNAL_SERVER_ERROR,
      "Failed to log in User",
      [error.message]
    );
  }
};

export const UserControllers = {
  registerUser,
  loginUser,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SUCCESS, ERROR } from "../shared/api.response.types";
import { ServiceServices } from "./service.service";
import httpStatus from "http-status";

const createService = async (req: Request, res: Response) => {
  try {
    const service = await ServiceServices.createServiceIntoDB(req.body);
    SUCCESS(res,httpStatus.CREATED, "Service created successfully", service);
  } catch (error: any) {
    ERROR(res,httpStatus.INTERNAL_SERVER_ERROR, "Failed to create Service", [error.message]);
  }
};


export const ServiceControllers = {
  createService,
};

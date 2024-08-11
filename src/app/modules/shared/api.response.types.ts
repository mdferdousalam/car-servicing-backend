/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";

export interface APIResponseSuccess {
  success: true;
  statusCode: number;
  message: string;
  data?: any;
}

export interface APIResponseError {
  success: false;
  statusCode: number;
  message: string;
  errors?: any[];
}

export type APIResponse = APIResponseSuccess | APIResponseError;

function sendAPIResponse(res: Response, response: APIResponse) {
  res.status(response.statusCode).json(response);
}

export function SUCCESS(
  res: Response,
  message: string,
  data?: any,
  statusCode: number = 200
) {
  const apiResponse: APIResponseSuccess = {
    success: true,
    statusCode,
    message,
    data,
  };
  sendAPIResponse(res, apiResponse);
}

export function ERROR(
  res: Response,
  message: string,
  errors?: any[],
  statusCode: number = 400
) {
  const apiResponse: APIResponseError = {
    success: false,
    statusCode,
    message,
    errors,
  };
  sendAPIResponse(res, apiResponse);
}

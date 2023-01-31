import { Response } from "express";

class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number = 400, message: string) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };

export const handleError = (err: AppError, res: Response) => {
  const { statusCode, message } = err;

  return res.status(statusCode).json({
    status: "eror",
    statusCode,
    message,
  });
};

import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/ErrorHTTP";
import userListService from "../../services/users/userList.service";
import { instanceToPlain } from "class-transformer";

const userListController = async (req: Request, res: Response) => {
  try {
    const users = await userListService();

    return res.status(200).json(instanceToPlain(users));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userListController;

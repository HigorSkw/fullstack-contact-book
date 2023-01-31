import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/ErrorHTTP";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const userID = req.userID;

    const { id, ...updateValues } = req.body;

    const user = await userUpdateService(userID, updateValues);

    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userUpdateController;

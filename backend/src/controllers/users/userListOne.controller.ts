import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/ErrorHTTP";
import userListOneService from "../../services/users/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const userID = req.userID;

    const user = await userListOneService(userID);

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userListOneController;

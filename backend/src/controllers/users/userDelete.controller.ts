import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/ErrorHTTP";
import userDeleteService from "../../services/users/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const idUser = req.userID;

    const user = await userDeleteService(idUser);

    return res.status(200).json({ message: "User deleted with sucess!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userDeleteController;

import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    const { id, ...updateValues } = req.body;

    const user = await userUpdateService(email, updateValues);

    return res.status(200).json({ message: "Usuario atualizado" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;

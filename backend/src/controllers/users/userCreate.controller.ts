import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/ErrorHTTP";
import userCreateService from "../../services/users/userCreate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, telefone, email, password } = req.body;
    const newUser = await userCreateService({
      name,
      email,
      password,
      telefone,
    });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userCreateController;

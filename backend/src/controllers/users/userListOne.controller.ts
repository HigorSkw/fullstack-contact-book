import { Request, Response } from "express";
import userListOneService from "../../services/users/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const user = await userListOneService({
      authorization: req.headers.authorization,
    });

    return res.status(200).send(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;

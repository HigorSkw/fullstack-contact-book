import { Request, Response } from "express";
import customerCreateService from "../../services/customer/customerCreate.service";
import { AppError, handleError } from "../../errors/ErrorHTTP";

const customerCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, telefone } = req.body;
    const userId = req.userID;

    const newCustomer = await customerCreateService({
      name,
      email,
      telefone,
      userId,
    });

    return res.status(201).send(newCustomer);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default customerCreateController;

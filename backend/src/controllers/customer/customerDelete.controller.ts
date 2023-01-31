import { Request, Response } from "express";
import customerDeleteService from "../../services/customer/customerDelete.service";

const customerDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await customerDeleteService(id);
  return res.status(204).json(customer);
};

export default customerDeleteController;

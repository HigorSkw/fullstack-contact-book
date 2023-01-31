import { Request, Response } from "express";
import customerUpdateService from "../../services/customer/customerUpdate.service";

const customerUpdateController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { idCustomer, ...updateValues } = req.body;
  const customer = await customerUpdateService(id, updateValues);
  return res.status(200).json(customer);
};

export default customerUpdateController;

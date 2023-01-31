import { Request, Response } from "express";
import customerListService from "../../services/customer/customerList.service";

const customerListController = async (req: Request, res: Response) => {
  const customers = await customerListService();
  return res.status(200).json(customers);
};

export default customerListController;

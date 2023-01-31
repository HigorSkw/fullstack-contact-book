import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";

const customerListService = async () => {
  const customerRepository = AppDataSource.getRepository(Customer);

  const customers = await customerRepository.find();

  return customers;
};

export default customerListService;

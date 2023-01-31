import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";

const customerDeleteService = async (id: string) => {
  const customerRepository = AppDataSource.getRepository(Customer);

  let customers = await customerRepository.find();

  let accountCustomer = customers.find((customer) => customer.id === id);

  await customerRepository.delete(accountCustomer!.id);

  return true;
};

export default customerDeleteService;

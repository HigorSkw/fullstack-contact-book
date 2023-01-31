import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/ErrorHTTP";

const customerUpdateService = async (id: string, updateValues: any) => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const customer = await customerRepository.findOneBy({ id });

  if (!customer) {
    throw new AppError(404, "Contact not found");
  }

  await customerRepository.update(customer.id, updateValues);

  const updateCustomer = await customerRepository.findOneBy({
    id: customer.id,
  });

  return updateCustomer;
};

export default customerUpdateService;

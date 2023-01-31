import { User } from "../../entities/user.entity";
import { Customer } from "../../entities/customer.entity";
import { ICustomerCreate } from "../../interfaces/customer";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/ErrorHTTP";

const customerCreateService = async ({
  name,
  email,
  telefone,
  userId,
}: ICustomerCreate) => {
  if (!name || !email || !telefone) {
    throw new AppError(400, "Fields: Name, Email and Telefone is necessary");
  }
  const userRepository = AppDataSource.getRepository(User);
  const customerRepository = AppDataSource.getRepository(Customer);

  const users = await userRepository.find();
  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new AppError(403, "User not found!");
  }

  const customerCreate = customerRepository.create({
    name,
    email,
    telefone,
    user,
  });

  const customerComplete = await customerRepository.save(customerCreate);

  return customerComplete;
};

export default customerCreateService;

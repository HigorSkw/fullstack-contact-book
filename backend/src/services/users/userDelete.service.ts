import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userDeleteService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);

  let users = await userRepository.find();

  let account = users.find((user) => user.email === email);

  await userRepository.delete(account!.id);

  return true;
};

export default userDeleteService;

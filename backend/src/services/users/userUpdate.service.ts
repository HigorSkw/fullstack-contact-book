import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/ErrorHTTP";

const userUpdateService = async (id: string, updateValues: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new AppError(404, "User not Found");
  }

  if (updateValues.password) {
    if (bcrypt.compareSync(updateValues.password, account!.password)) {
      throw new AppError(409, "Inform a different password.");
    }

    updateValues.password = bcrypt.hashSync(updateValues.password, 10);
  }

  await userRepository.update(account!.id, updateValues);

  const userUpdate = await userRepository.findOneBy({ id: account.id });

  return userUpdate;
};

export default userUpdateService;

import { User } from "../../entities/user.entity";
import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";

const userCreateService = async ({
  name,
  email,
  telefone,
  password,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email Already Exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.telefone = telefone;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default userCreateService;

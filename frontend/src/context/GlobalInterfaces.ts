import { ReactNode, Dispatch, SetStateAction } from "react";
export interface IAuthProviderProprs {
  children: ReactNode;
}

export interface IGlobalContext {
  user: IUser | undefined;
  loginUser(data: IUserLogin): void;
  logoutUser: () => void;
  registerUser(data: IUserRegister): void;
  getSelfUser: () => Promise<void>;
  updateUser: (data: any) => void;
  deleteUser: () => void;
}

export interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
  telefone: string;
}

export interface IUserRegister {
  name: string;
  password: string;
  confirm_password: string;
  email: string;
  telefone: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ICustomer {
  name: string;
  email: string;
  telefone: string;
}

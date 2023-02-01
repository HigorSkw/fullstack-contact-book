import { ReactNode, Dispatch, SetStateAction } from "react";
export interface IAuthProviderProprs {
  children: ReactNode;
}

export interface IGlobalContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  // loginUser(data: IUserLogin): void;
  registerUser(data: IUserRegister): void;
  // registerCustomer(data: ICustomer): void;
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

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
  updateUser: (data: IUpdateUser) => Promise<void>;
  deleteUser: () => Promise<void>;
  customerList: ICustomer[];
  registerCustomer: (data: ICustomer) => Promise<void>;
  deleteCustomer: () => void;
  updateCustomer: (data: any) => void;
  getCustomer: () => Promise<void>;
  customer: ICustomer | undefined;
  setCustomer: React.Dispatch<React.SetStateAction<ICustomer | undefined>>;
  delCustomerModal: boolean;
  setDelCustomerModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditCustomerModal: React.Dispatch<React.SetStateAction<boolean>>;
  editCustomerModal: boolean;
}

export interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
  telefone: string;
  customers: ICustomer[];
  created_at: Date;
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
  id: string;
  name: string;
  email: string;
  telefone: string;
  created_at: Date;
}

export interface IUpdateUser {
  name?: string;
  password?: string;
  email?: string;
  telefone?: string;
}

export interface IUpdateCustomer {
  name?: string;
  email?: string;
  telefone?: string;
}

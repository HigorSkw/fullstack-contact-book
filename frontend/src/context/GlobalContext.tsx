import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import { api } from "../services/Api";
import {
  IAuthProviderProprs,
  IGlobalContext,
  IUser,
  IUserLogin,
  IUserRegister,
} from "./GlobalInterfaces";

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProprs) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [customers, setCustomers] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const token = window.localStorage.getItem("@contact-book-token");

  const registerUser = async (data: IUserRegister) => {
    try {
      await api.post("/users", data).then(() => {
        console.log("Conta criada com sucesso!");
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
      console.log("Algo deu errado!");
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        // loginUser,
        // registerCustomer,
        registerUser,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

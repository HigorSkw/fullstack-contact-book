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

export interface ILoginRes {
  data: {
    token: string;
  };
}

export interface IUserRes {
  data: IUser;
}

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProprs) => {
  const [user, setUser] = useState<IUser>();
  const [customers, setCustomers] = useState<IUser>({} as IUser);
  const [tokenIsAdd, setTokenIsAdd] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (dataUser: IUserLogin) => {
    try {
      const { data }: ILoginRes = await api.post("/login", dataUser);
      localStorage.clear();
      localStorage.setItem("@contact-book:token", data.token);
      setTokenIsAdd(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    setUser(undefined);
    localStorage.removeItem("@contact-book:token");
  };

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

  const getSelfUser = async () => {
    const token = window.localStorage.getItem("@contact-book:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const { data }: IUserRes = await api.post("/users/me");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    setTokenIsAdd(false);
  };

  const updateUser = (data: any) => {
    try {
      api.patch("/users/me", data).then(() => {
        toast.success(`${"Usuário atualizado!"}`);
        getSelfUser();
      });
    } catch (error) {
      console.log(error);
      toast.error(`${"Não foi possivel atualizar"}`);
    }
  };

  const deleteUser = () => {
    try {
      api.patch("/users/me").then(() => {
        toast.success(`${"Usuário Deletado!"}`);
        setUser(undefined);
      });
    } catch (error) {
      console.log(error);
      toast.error(`${"Não foi possivel deletar"}`);
    }
  };

  useEffect(() => {
    getSelfUser();
  }, [tokenIsAdd]);

  return (
    <GlobalContext.Provider
      value={{
        loginUser,
        logoutUser,
        user,
        registerUser,
        deleteUser,
        getSelfUser,
        updateUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

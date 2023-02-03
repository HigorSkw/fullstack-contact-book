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
  ICustomer,
  IUpdateUser,
} from "./GlobalInterfaces";

export interface ILoginRes {
  data: {
    token: string;
  };
}

export interface IUserRes {
  data: IUser;
}

export interface ICustomerRes {
  data: ICustomer[];
}

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const GlobalProvider = ({ children }: IAuthProviderProprs) => {
  const [user, setUser] = useState<IUser>();
  const [customerList, setCustomerList] = useState<ICustomer[]>([]);
  const [customer, setCustomer] = useState<ICustomer>();

  const [delCustomerModal, setDelCustomerModal] = useState(false);
  const [editCustomerModal, setEditCustomerModal] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (dataUser: IUserLogin) => {
    try {
      const { data }: ILoginRes = await api.post("/login/", dataUser);
      window.localStorage.clear();

      window.localStorage.setItem("@contact-book:token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    setUser(undefined);
    localStorage.removeItem("@contact-book:token");
    navigate("/login");
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
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    if (token) {
      try {
        const { data }: IUserRes = await api.get("/users/me");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (!token) {
      navigate("/login");
    }
  };

  const updateUser = async (data: IUpdateUser) => {
    const token = window.localStorage.getItem("@contact-book:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.patch("/users/me", data).then(() => {
        console.log("Update realizado!!");
        getSelfUser();
        console.log(user);
      });
    } catch (error) {
      console.log(error);
      toast.error(`${"Não foi possivel atualizar"}`);
    }
  };

  const deleteUser = async () => {
    const token = window.localStorage.getItem("@contact-book:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.delete("/users/me").then(() => {
        console.log("usuário deletado com sucesso!");
        logoutUser();
      });
    } catch (error) {
      console.log(error);
      console.log("Algo deu errado!");
    }
  };

  const registerCustomer = async (data: ICustomer) => {
    try {
      await api.post("/customer", data).then(() => {
        console.log("Customer criado com sucesso!");
        getSelfUser();
      });
    } catch (error) {
      console.log(error);
      console.log("Algo deu errado!");
    }
  };

  const getCustomer = async () => {
    try {
      const { data }: ICustomerRes = await api.get("/customer");
      setCustomerList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCustomer = (data: any) => {
    try {
      api.patch(`/customer/${customer?.id}`, data).then(() => {
        toast.success(`${"Usuário atualizado!"}`);
        getSelfUser();
        setEditCustomerModal(false);
      });
    } catch (error) {
      console.log(error);
      toast.error(`${"Não foi possivel atualizar"}`);
    }
  };

  const deleteCustomer = () => {
    try {
      api.delete(`/customer/${customer?.id}`).then(() => {
        toast.success(`${"Customer deletado!"}`);
        getSelfUser();
      });
    } catch (error) {
      console.log(error);
      toast.error(`${"Não foi possivel atualizar"}`);
    }
  };

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
        registerCustomer,
        customerList,
        deleteCustomer,
        getCustomer,
        updateCustomer,
        customer,
        setCustomer,
        delCustomerModal,
        setDelCustomerModal,
        setEditCustomerModal,
        editCustomerModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

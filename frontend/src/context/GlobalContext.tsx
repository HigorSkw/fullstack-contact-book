import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

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

  const [editUserModal, setEditUserModal] = useState(false);
  const [delCustomerModal, setDelCustomerModal] = useState(false);
  const [editCustomerModal, setEditCustomerModal] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (dataUser: IUserLogin) => {
    try {
      const { data }: ILoginRes = await api.post("/login/", dataUser);
      window.localStorage.clear();
      toast.success("Logado com sucesso!");

      window.localStorage.setItem("@contact-book:token", data.token);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ocorreu algum problema.");
      console.log(error);
    }
  };

  const logoutUser = () => {
    setUser(undefined);
    localStorage.removeItem("@contact-book:token");
    toast.success("Logout efetuado!!");
    navigate("/login");
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      await api.post("/users", data).then(() => {
        toast.success("Conta criada com sucesso!!");
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum problema.");
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
        toast.error("Ocorreu algum problema.");
      }
    }
    if (!token) {
      navigate("/login");
    }
  };

  const updateUser = async (data: IUpdateUser) => {
    if (
      data.name === "" &&
      data.email === "" &&
      data.telefone === "" &&
      data.password === ""
    ) {
      toast.error("Não houve atualizações");
      return;
    }

    const token = window.localStorage.getItem("@contact-book:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.patch("/users/me", data).then(() => {
        getSelfUser();
        setEditUserModal(false);
        toast.success("Atualizado com sucesso!");
      });
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum problema.");
    }
  };

  const deleteUser = async () => {
    const token = window.localStorage.getItem("@contact-book:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    try {
      await api.delete("/users/me").then(() => {
        toast.success("Usuário deletado com sucesso!");
        logoutUser();
      });
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum problema.");
    }
  };

  const registerCustomer = async (data: ICustomer) => {
    try {
      await api.post("/customer", data).then(() => {
        getSelfUser();
        toast.success("Contato criado!");
      });
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum problema.");
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
    if (data.name === "" && data.email === "" && data.telefone === "") {
      toast.error("Não houve atualizações");
      return;
    }
    try {
      api.patch(`/customer/${customer?.id}`, data).then(() => {
        getSelfUser();
        toast.success("Contato atualizado!");
        setEditCustomerModal(false);
      });
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum problema.");
    }
  };

  const deleteCustomer = () => {
    try {
      api.delete(`/customer/${customer?.id}`).then(() => {
        getSelfUser();
      });
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu algum problema.");
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
        editUserModal,
        setEditUserModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

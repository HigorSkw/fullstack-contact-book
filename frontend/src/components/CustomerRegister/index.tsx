import { ContainerRegister } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ICustomer } from "../../context/GlobalInterfaces";

const CustomerRegister = () => {
  const { registerCustomer } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const registerSchema = yup.object().shape({
    name: yup.string().required("Name Obrigatório"),
    email: yup.string().email("Não é um e-mail").required("E-mail obrigatório"),
    telefone: yup
      .string()
      .required("Campo obrigatório!")
      .max(11, "Número inválido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Número inválido"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomer>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <ContainerRegister>
      <div className="container-register">
        <div className="wrap-register">
          <form
            className="register-form"
            onSubmit={handleSubmit(registerCustomer)}
          >
            <span className="register-form-title">Cadastre seu contato!</span>
            <span className="register-form-title">
              <br />
            </span>

            <div className="wrap-input">
              <input
                className={name !== "" ? "has-val input" : "input"}
                type="text"
                value={name}
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder={
                  errors.name?.message !== "" ? "Name *" : errors.name?.message
                }
              ></span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                id="email"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder={
                  errors.email?.message !== ""
                    ? "Email *"
                    : errors.name?.message
                }
              ></span>
            </div>

            <div className="wrap-input">
              <input
                className={telefone !== "" ? "has-val input" : "input"}
                type="tel"
                id="telefone"
                {...register("telefone")}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Telefone*"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="register-form-btn" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContainerRegister>
  );
};

export default CustomerRegister;

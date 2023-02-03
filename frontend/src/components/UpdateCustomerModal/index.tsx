import { ContainerRegister } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState, Dispatch, SetStateAction } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IUpdateCustomer } from "../../context/GlobalInterfaces";
import { Button } from "../Button";

const EditCustomerModal = () => {
  const { updateCustomer, setEditCustomerModal } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const registerSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Não é um e-mail"),
    telefone: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateCustomer>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  return (
    <ContainerRegister>
      <div className="container-register">
        <div className="wrap-register">
          <form
            className="register-form"
            onSubmit={handleSubmit(updateCustomer)}
          >
            <span className="register-form-title">Editar contato!</span>
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
              <Button text="Update" color="white" type="submit" />
              <Button
                text="Cancelar"
                color="white"
                onClick={() => setEditCustomerModal(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </ContainerRegister>
  );
};

export default EditCustomerModal;

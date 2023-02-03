import { ContainerRegister } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState, Dispatch, SetStateAction } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IUpdateUser } from "../../context/GlobalInterfaces";
import { Button } from "../Button";

export interface IEditUserModalProprs {
  setEditUserModal: Dispatch<SetStateAction<boolean>>;
}

const EditUserModal = ({ setEditUserModal }: IEditUserModalProprs) => {
  const { updateUser } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");

  const registerSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Não é um e-mail"),
    telefone: yup.string(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  return (
    <ContainerRegister>
      <div className="container-register">
        <div className="wrap-register">
          <form className="register-form" onSubmit={handleSubmit(updateUser)}>
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

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                id="password"
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password*"></span>
            </div>

            <div className="container-login-form-btn">
              <Button text="Update" color="white" type="submit" />
              <Button
                text="Cancelar"
                color="white"
                onClick={() => setEditUserModal(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </ContainerRegister>
  );
};

export default EditUserModal;

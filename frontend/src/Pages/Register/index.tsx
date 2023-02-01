import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { IUserRegister } from "../../context/GlobalInterfaces";
import { ContainerRegister } from "./styles";

const Register = () => {
  const { registerUser } = useContext(GlobalContext);

  const registerSchema = yup.object().shape({
    name: yup.string().required("Time Obrigatório"),
    email: yup.string().email("Não é um e-mail").required("E-mail obrigatório"),
    telefone: yup.string().required("o telefone é obrigatório"),
    password: yup
      .string()
      .required("Deve conter uma senha")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Ex: Aa@12345678."
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Confirmação deve ser iguar a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <ContainerRegister>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome do usuário:</label>
          <input
            type="text"
            id="name"
            placeholder="Fulano"
            {...register("name")}
          />
          {<span>{errors.name?.message}</span>}

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="fulano@email.com"
            {...register("email")}
          />
          {<span>{errors.email?.message}</span>}

          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            placeholder="(48) 99999-7777"
            {...register("telefone")}
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <label htmlFor="confirm_password">Confirmar Senha:</label>
          <input
            type="password"
            id="confirm_password"
            placeholder="********"
            {...register("confirm_password")}
          />
          {errors.confirm_password && (
            <span>{errors.confirm_password.message}</span>
          )}
          <button type="submit">Enviar</button>
        </form>
        <div>
          <span>Já possuiu uma conta?</span>
          <Link to={"/login"}>Logar</Link>
        </div>
      </ContainerRegister>
    </>
  );
};

export default Register;

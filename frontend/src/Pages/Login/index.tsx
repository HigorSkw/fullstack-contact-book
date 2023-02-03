import { ContainerLogin } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import { IUserLogin } from "../../context/GlobalInterfaces";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSchema = yup.object().shape({
    email: yup.string().email("Não é um e-mail").required("E-mail obrigatório"),
    password: yup.string().required("Password é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(loginSchema) });

  return (
    <ContainerLogin>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit(loginUser)}>
            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title">
              <br />
            </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                {...register("password")}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="password"></span>
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">
                Login
              </button>
            </div>

            <div className="text-register-page">
              <span className="txt1">Não possui conta?</span>
              <Link className="txt2" to={"/register"}>
                Criar uma conta!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ContainerLogin>
  );
};

export default Login;

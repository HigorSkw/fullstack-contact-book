import { ContainerRegister } from "./styles";
import img3 from "../../assets/undraw_reminder_re_fe15.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { IUserRegister } from "../../context/GlobalInterfaces";

const Register = () => {
  const { registerUser } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().email("Não é um e-mail").required("E-mail obrigatório"),
    telefone: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Numero inválido")
      .max(11, "Número inválido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Número inválido"
      ),
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
    <ContainerRegister>
      <div className="container-register">
        <div className="wrap-register">
          <form className="register-form" onSubmit={handleSubmit(registerUser)}>
            <span className="register-form-title">Faça seu cadastro!</span>
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
              <span className="focus-input" data-placeholder="Name *"></span>
              <span className="errors-message">{errors.name?.message}</span>
            </div>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                id="email"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email *"></span>
              <span className="errors-message">{errors.email?.message}</span>
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
              <span className="errors-message">{errors.telefone?.message}</span>
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
              <span className="errors-message">{errors.password?.message}</span>
            </div>

            <div className="wrap-input">
              <input
                className={confirmPassword !== "" ? "has-val input" : "input"}
                type="password"
                id="confirm_password"
                {...register("confirm_password")}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="focus-input"
                data-placeholder="Confirm Password*"
              ></span>

              <span className="errors-message">
                {errors.confirm_password?.message}
              </span>
            </div>
            <div className="container-login-form-btn">
              <button className="register-form-btn" type="submit">
                Enviar
              </button>
            </div>

            <div className="text-register-page">
              <span className="txt1">Já possuiu uma conta? </span>
              <Link className="txt2" to={"/login"}>
                Logar
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="container-img">
        <img src={img3} alt="imagem-register" />
      </div>
    </ContainerRegister>
  );
};

export default Register;

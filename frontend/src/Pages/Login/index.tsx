import { useState } from "react";
import hgrImagem from "../../assets/inkpx-word-art.jpg";
import { ContainerLogin } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerLogin>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title">
              <img src={hgrImagem} alt="Higor Skowronski" />
            </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-register-page">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#">
                Criar uma conta!
              </a>
            </div>
          </form>
        </div>
      </div>
    </ContainerLogin>
  );
};

export default Login;

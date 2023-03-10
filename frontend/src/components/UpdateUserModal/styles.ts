import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;

  position: fixed;
  background-color: #00000095;

  overflow: hidden;

  .container-register {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    padding: 15px;
  }

  .wrap-register {
    width: 390px;
    background-color: var(--gray);
    border-radius: 15px;
    overflow: hidden;
    padding: 77px 55px 33px 55px;

    @media (min-width: 1130px) {
      margin-left: 8rem;
    }
  }

  .register-form {
    width: 100%;
  }

  .register-form-title {
    display: block;
    font-size: 30px;
    color: azure;

    line-height: 1.2;
    text-align: center;
  }

  .register-form-title img {
    width: 90px;
    background-color: transparent;
  }

  .wrap-input {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #adadad;
    margin-bottom: 37px;
  }

  .input {
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    border: none;
    width: 100%;
    height: 45px;
    background-color: transparent;
    padding: 0 5px;
  }

  .register-form {
    width: 100%;
  }

  .focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    pointer-events: none;
    color: #adadad;
  }

  .focus-input::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;

    height: 2px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;

    background: -webkit-linear-gradient(
      to left,
      var(--green),
      var(--blue-medium)
    );
    background: -o-linear-gradient(to left, var(--purple), var(--blue-medium));
    background: -moz-linear-gradient(
      to left,
      var(--purple),
      var(--blue-medium)
    );
    background: linear-gradient(to left, var(--purple), var(--blue-medium));
  }

  .focus-input::after {
    font-size: 15px;
    color: #999999;
    line-height: 1.2;

    content: attr(data-placeholder);

    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;

    padding-left: 5px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }

  .input:focus {
    outline: 0;
  }

  .input:focus + .focus-input::after {
    top: -15px;
  }

  .input:focus + .focus-input::before {
    width: 100%;
  }

  .container-register-form-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;
  }

  .text-center {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
  }

  .txt1 {
    font-size: 14px;
    color: #adadad;
    line-height: 1.5;
    padding-right: 5px;
    text-decoration: none;
  }
  .txt2 {
    font-size: 14px;
    color: #6a7dfe;
    line-height: 1.5;
    text-decoration: none;
  }

  .has-val + .focus-input::after {
    top: -15px;
  }

  .has-val + .focus-input::before {
    width: 100%;
  }

  .container-login-form-btn {
    display: flex;
    gap: 10px;
  }
`;

import { Container } from "./styles";
import { TfiAgenda } from "react-icons/tfi";

import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export const HeaderComponents = () => {
  const { user, logoutUser } = useContext(GlobalContext);

  return (
    <Container>
      <div className="Header">
        <div className="Div-title">
          <span>
            <TfiAgenda />
          </span>
          <h1>Contact Book Application</h1>
        </div>

        <div className="div-header-btn">
          <button className="header-btn" onClick={() => logoutUser()}>
            Logout
          </button>
        </div>
      </div>
    </Container>
  );
};

import styled from "styled-components";
import { IStyledButtonProps } from "./index";

export const StyledButtonSucess = styled.button<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "2.5rem"};

  font-size: 15px;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.color};

  line-height: 1.2;

  text-transform: uppercase;

  background: -webkit-linear-gradient(
    to left,
    var(--purple),
    var(--blue-medium)
  );
  background: -o-linear-gradient(to left, var(--purple), var(--blue-medium));
  background: -moz-linear-gradient(to left, var(--purple), var(--blue-medium));
  background: linear-gradient(to left, var(--purple), var(--blue-medium));

  :hover {
    cursor: pointer;
  }
`;

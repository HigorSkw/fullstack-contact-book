import { ButtonHTMLAttributes, forwardRef } from "react";
import { StyledButtonSucess } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  height?: string;
  color: string;
}

export interface IStyledButtonProps {
  width?: string;
  height?: string;
}

export const Button = forwardRef<HTMLInputElement, IButtonProps>(
  ({ text, width, height, color, ...rest }, ref) => {
    return (
      <StyledButtonSucess width={width} height={height} color={color} {...rest}>
        {text}
      </StyledButtonSucess>
    );
  }
);

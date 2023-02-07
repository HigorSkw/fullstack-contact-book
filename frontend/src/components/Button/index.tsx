import { ButtonHTMLAttributes, forwardRef } from "react";
import { StyledButtonSucess, StyledButtonDelete } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width?: string;
  height?: string;
  color: string;
  typeColor?: string;
}

export interface IStyledButtonProps {
  width?: string;
  height?: string;
}

export const Button = forwardRef<HTMLInputElement, IButtonProps>(
  ({ text, width, height, color, typeColor, ...rest }, ref) => {
    return (
      <>
        {typeColor ? (
          <StyledButtonDelete
            width={width}
            height={height}
            color={color}
            {...rest}
          >
            {text}
          </StyledButtonDelete>
        ) : (
          <StyledButtonSucess
            width={width}
            height={height}
            color={color}
            {...rest}
          >
            {text}
          </StyledButtonSucess>
        )}
      </>
    );
  }
);

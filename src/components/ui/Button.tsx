import React from "react";
import { Button as RButton } from "@radix-ui/themes";
import styled, { css } from "styled-components";

const ButtonStyled = styled(RButton)<{ value?: string }>`
  transition: background 0.3s ease;
  background: transparent linear-gradient(270deg, #3ae7ab 0%, #2dc4ea 100%) 0%
    0% no-repeat padding-box;
  position: relative;
  ${({ value }) =>
    value &&
    css`
      &:before {
        content: "${value}";
      }
      &:after {
        content: "${value}";
        opacity: 0;
        position: absolute;
        z-index: 1;
        inset: 0;
        border-radius: inherit;
        transition: opacity 0.3s;
        background: transparent
          linear-gradient(270deg, #2dc4ea 0%, #3ae7ab 100%) 0% 0% no-repeat
          padding-box;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover span {
        opacity: 1;
      }
      &:hover {
        &:after {
          opacity: 1;
        }
      }
    `}
`;

const Button: React.FC<{
  children: React.ReactNode;
  value?: string;
}> = ({ children, value }: { children: React.ReactNode; value?: string }) => {
  return (
    <ButtonStyled
      value={value}
      className="rounded-[50px] px-[40px] py-[25px] cursor-pointer flex justify-center items-center"
    >
      {!value && children}
    </ButtonStyled>
  );
};

export default Button;

// bg-gradient-to-r from-primary to-green hover:from-green hover:to-primary transition-all duration-300 ease-in-out

import { Text } from "@radix-ui/themes";
import React from "react";
import styled, { css } from "styled-components";

const TextStyled = styled(Text)<{ border?: boolean }>`
  display: block;
  padding-bottom: 15px;
  margin-bottom: 15px;
  position: relative;
  ${({ border }) =>
    border &&
    css`
      &:after {
        content: "";
        width: 150px;
        height: 3px;
        background-color: #2dc4ea;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    `}
`;

const Title: React.FC<{
  children: React.ReactNode;
  border?: boolean;
}> = ({
  children,
  border = true
}: {
  children: React.ReactNode;
  border?: boolean;
}) => {
  return (
    <TextStyled
      border={border}
      weight="bold"
      size="8"
      className="space-x-[10px] uppercase"
    >
      {children}
    </TextStyled>
  );
};

export default Title;

import { Text } from "@radix-ui/themes";
import React from "react";
import styled, { css } from "styled-components";
import { cn } from "../../shared/cn";

const TextStyled = styled(Text)<{ border?: boolean }>`
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
  className?: string;
}> = ({
  children,
  border = true,
  className
}: {
  children: React.ReactNode;
  border?: boolean;
  className?: string;
}) => {
  return (
    <TextStyled
      border={border}
      weight="bold"
      size="8"
      className={cn("space-x-[10px] uppercase", className)}
    >
      {children}
    </TextStyled>
  );
};

export default Title;

import React from "react";
import { Button as RButton } from "@radix-ui/themes";

const Button: React.FC<{ children: React.ReactNode }> = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <RButton className="bg-gradient-to-r from-primary to-green rounded-[50px] px-[40px] py-[25px]">
      {children}
    </RButton>
  );
};

export default Button;

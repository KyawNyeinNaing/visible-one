import { Button, DropdownMenu } from "@radix-ui/themes";
import { Icons } from "./Image";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  border: 1px solid #2dc4ea;
`;

const Dropdown: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <ButtonStyled className="text-primary" variant="soft">
          SG EN
          <Icons.downCaret />
        </ButtonStyled>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-[100px]">
        <DropdownMenu.Item className="">SG EN</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item className="">MM</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;

import { useState } from "react";
import { cn } from "../../shared/cn";

const Switch: React.FC<{
  switchValue?: JSX.Element;
  onCheckedChange?: (arg?: boolean) => void;
}> = ({
  switchValue,
  onCheckedChange
}: {
  switchValue?: JSX.Element;
  onCheckedChange?: (arg?: boolean) => void;
}) => {
  const [toggle, setToggle] = useState(false);

  const handleCheck = () => {
    setToggle(!toggle);
    if (onCheckedChange) {
      setTimeout(() => {
        onCheckedChange(!toggle);
      }, 400);
    }
  };

  return (
    <>
      <div
        className={cn(
          "w-[150px] border border-white flex items-center rounded-full p-1 cursor-pointer",
          toggle
            ? "bg-gradient-to-r from-primary to-green"
            : "bg-gradient-to-r from-green to-primary"
        )}
        onClick={handleCheck}
      >
        <div
          className={cn(
            "bg-white h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out",
            !toggle ? "translate-x-[3px]" : "transform translate-x-[117px]"
          )}
        />
        {switchValue}
      </div>
    </>
  );
};

export default Switch;

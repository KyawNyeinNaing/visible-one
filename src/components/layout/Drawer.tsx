import { ReactNode, useEffect, useRef, KeyboardEvent } from "react";
import { cn } from "../../shared/cn";
import "../../styles/drawer.css";

interface HamburgerDrawerProps {
  children: ReactNode;
  className?: string;
}

const HamburgerDrawer = ({ children, className }: HamburgerDrawerProps) => {
  const checkbox = useRef<HTMLInputElement | null>(null);

  const handleEscKey = (event: Event) => {
    const keyboardEvent = event as unknown as KeyboardEvent<HTMLElement>;
    console.log(keyboardEvent);
    // Closes the navigation drawer by pressing Esc key.
    if (keyboardEvent.key === "Escape" && checkbox.current) {
      checkbox.current.checked = false;
    }
  };

  const handleKeyup = (event: KeyboardEvent) => {
    if (event.key === "Enter" && checkbox.current) {
      checkbox.current.checked = !checkbox.current.checked;
    }
  };

  const handleClick = () => {
    document.documentElement.classList.toggle("HamburgerDrawer-open");
  };

  useEffect(() => {
    document.addEventListener("keyup", handleEscKey);
    return () => document.removeEventListener("keyup", handleEscKey);
  }, []);

  return (
    <div>
      <nav className={cn("HamburgerDrawer", className)} aria-label="Main menu">
        <input
          ref={checkbox}
          type="checkbox"
          id="HamburgerDrawer-toggle"
          aria-label="Toggle menu"
          onKeyUp={handleKeyup}
          onClick={handleClick}
        />
        <label
          className="z-[1]"
          htmlFor="HamburgerDrawer-toggle"
          tabIndex={-1}
          aria-hidden={true}
          hidden={true}
        >
          Close menu
        </label>
        <div
          className="HamburgerDrawer-icon"
          role="button"
          aria-label="Toggle menu"
        >
          <span></span>
        </div>
        <div className="HamburgerDrawer-panel z-10 pt-[30px]">{children}</div>
      </nav>
    </div>
  );
};

export default HamburgerDrawer;

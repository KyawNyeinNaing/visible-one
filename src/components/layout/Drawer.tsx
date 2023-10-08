import React, { ReactNode, useEffect, useRef } from "react";

import "../../styles/drawer.css";
import { cn } from "../../shared/cn";

export const HamburgerDrawer = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  const checkbox = useRef<HTMLInputElement | null>(null);

  const handleEscKey = (event: KeyboardEvent) => {
    // Closes the navigation drawer by pressing Esc key.
    if ("Escape" === event.key && checkbox.current) {
      checkbox.current.checked = false;
    }
  };

  const handleKeyup = (event: KeyboardEvent) => {
    if ("Enter" === event.key && checkbox.current) {
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
          aria-hidden="true"
          hidden
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

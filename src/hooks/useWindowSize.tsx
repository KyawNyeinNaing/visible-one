import { useEffect, useState } from "react";

// Hook
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    windowWidth: number;
    windowHeight: number;
  }>({
    windowWidth: 0,
    windowHeight: 0
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

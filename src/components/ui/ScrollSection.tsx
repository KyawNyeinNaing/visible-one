import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const AnimateStyled = styled(animated.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ScrollSection = ({ sectionName }) => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 1000 }
  });

  return (
    <AnimateStyled style={props} className="scroll-section">
      <h2>{sectionName}</h2>
    </AnimateStyled>
  );
};

export default ScrollSection;

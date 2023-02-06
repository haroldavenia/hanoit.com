import { useState } from "react";
import { useAnimation, useCycle } from "framer-motion";

//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export default function useAnimatedStickyHeader() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [x, cycleX] = useCycle("0%", "150%");
  const animationHeader = useAnimation();

  const toggleAnimation = () => {
    setShowStickyHeader(!showStickyHeader);
    animationHeader.start({ x: x, display: "block" });
    cycleX();
  };

  return {showStickyHeader, animationHeader, toggleAnimation }
}

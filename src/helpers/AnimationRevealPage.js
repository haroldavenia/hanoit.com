import React from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

const AnimationReveal = ({ disabled, children }) => {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => (
    <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
      {child}
    </AnimatedSlideInComponent>
  ));
  return <>{childrenWithAnimation}</>;
};

const AnimatedSlideInComponent = ({ direction = "left", offset = 30, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const x = { target: "0%" };

  if (direction === "left") x.initial = "0%";
  else x.initial = "0%";

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{
        x: inView ? x.target : x.initial,
        transitionEnd: {
          x: inView ? 0 : x.initial,
        },
      }}
      transition={{ type: "spring", damping: 30 }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
};

const App = (props) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);

export default App;

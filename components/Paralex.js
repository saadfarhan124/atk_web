import React, { useRef, useState, useLayoutEffect } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

const calculateMinHeight = (height, range) => {
  return height + height * range;
};

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
};

export default function ParallaxItem({ className, children, left }) {
  const range = 0.2;
  const { scrollY } = useScroll();
  const ref = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const [minHeight, setMinHeight] = useState("auto");
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: rand(1, 3)
  };

   useLayoutEffect(() => {
    if (!ref.current) return null;
    const onResize = () => {
      setOffsetTop(ref.current.offsetTop);
      setMinHeight(calculateMinHeight(ref.current.offsetHeight, range));
    };

    onResize();
    window.addEventListener("resize", onResize);
 
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);
  

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - 500, offsetTop + 500],
      [left, `${range * 100}%`]
    ),
    springConfig
  );

  return (
    <div style={{ minHeight }} className={className}>
      <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
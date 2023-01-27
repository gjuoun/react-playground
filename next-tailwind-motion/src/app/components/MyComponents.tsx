"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./UseDimentions";

export const MyComponent = () => (
  <motion.div
    className="bg-red-500 w-32 h-32"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
);

export const MyComponent2 = () => (
  <motion.div
    className="bg-red-500 w-32 h-32"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
);

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const ActionableComponent = () => {
  const [isOpened, setIsOpened] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="bg-blue-500 absolute w-full h-full">
      <motion.nav
        initial={false}
        animate={isOpened ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="absolute top-0 left-0 bottom-0 w-[300px]"
      >
        <motion.div
          className="absolute left-0 top-0 bottom-0 bg-slate-100 w-[300px]"
          variants={sidebar}
        />

        <MenuToggle toggle={() => setIsOpened(!isOpened)} />
      </motion.nav>
    </div>
  );
};

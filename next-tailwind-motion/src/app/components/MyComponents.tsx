"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MenuToggle } from "./MenuAnimation/MenuToggle";
import { useDimensions } from "../hooks/UseDimentions";

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





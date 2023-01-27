import { motion } from "framer-motion";
import React from "react";

const Item = () => {
  return (
    <div className="w-[100px] h-[100px]">
      <motion.div
        initial={{ top: 100 }}
        whileInView={{ top: 0 }}
        className="bg-red-500 w-[100px] h-[100px] absolute"
      ></motion.div>
    </div>
  );
};

export const FlexScrollContainer = () => {
  return (
    <div className="overflow-x-auto overflow-y-hidden w-[300px] ">
      <div className="relative w-[520px] h-[100px] flex gap-2 ">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ActionableComponent,
  MyComponent,
  MyComponent2,
} from "./components/MyComponents";

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

// const Item = () => {
//   const [translate, setTranslate] = useState(20);
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setTranslate(0);
//         } else {
//           setTranslate(20);
//         }
//       });
//     });
//     observer.observe(ref.current!);
//   }, []);
//   return (
//     <div
//       ref={ref}
//       style={{
//         transform: `translateY(${translate}px) translateZ(0)`,
//       }}
//       className="bg-red-500 w-[100px] h-[100px] transition "
//     ></div>
//   );
// };

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="overflow-x-auto overflow-y-hidden w-[300px] ">
        <div className="relative w-[520px] h-[100px] flex gap-2 ">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

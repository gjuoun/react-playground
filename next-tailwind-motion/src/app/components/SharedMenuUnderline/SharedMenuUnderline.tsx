import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { title: "Tomato", emoji: "🍅" },
  { title: "Lettuce", emoji: "🥬" },
  { title: "Orange", emoji: "🍊" },
  { title: "Apple", emoji: "🍎" },
  { title: "Banana", emoji: "🍌" },
];
export const SharedMenuUnderline = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <nav>
      <ul className="flex w-[600px] gap-4">
        {tabs.map((tab) => {
          const isSelected = selected === tab;
          const bgClass = isSelected ? "bg-red-100" : "bg-white";
          return (
            <li
              key={tab.title}
              className={"relative p-4 cursor-pointer " + bgClass}
              onClick={() => setSelected(tab)}
            >
              {`${tab.emoji} ${tab.title}`}

              {isSelected && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-blue-500"
                ></motion.div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

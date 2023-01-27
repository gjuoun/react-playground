"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

const articles = [
  {
    header: "Article 1",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel`,
  },
  {
    header: "Article 2",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel`,
  },
];

function ToggleContent({
  header,
  content,
}: {
  header: string;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? content : null}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <div className="w-[300px]">
        {/* <LayoutGroup> */}
          {articles.map((article, index) => (
            <ToggleContent key={article.header} {...article} />
          ))}
        {/* </LayoutGroup> */}
      </div>
    </div>
  );
}

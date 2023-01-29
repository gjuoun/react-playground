"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { NeonButton } from "./ui/Button";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="w-[120px] ">
        <NeonButton />
        <NeonButton color="blue" />
      </div>
    </div>
  );
}

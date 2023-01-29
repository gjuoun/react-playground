"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { GradientButton } from "./ui/Button";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-4">
        <GradientButton color="blue" blurSize="small">
          Cancel
        </GradientButton>
        <GradientButton loading color="blue" blurSize="medium">
          Loading
        </GradientButton>
        <GradientButton color="red" blurSize="small">
          Confirm
        </GradientButton>
        <GradientButton color="red" blurSize="medium">
          Loading
        </GradientButton>
      </div>
    </div>
  );
}

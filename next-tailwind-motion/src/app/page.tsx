"use client";

import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { GradientButton } from "./ui/GradientButton";
import { GradientText } from "./ui/GradientText";
import { GradientTextField } from "./ui/GradientTextField";

export default function Home() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-4 ">
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

        <GradientText>This is my title</GradientText>

        <div className="flex flex-col gap-4">
          <GradientTextField
            label={"Email"}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <GradientTextField
            label={"Name"}
            value={value2}
            // error={true}
            onChange={(e) => {
              setValue2(e.target.value);
            }}
          />

          <GradientTextField
            label={"Age"}
            value={value3}
            error={"Age is required"}
            onChange={(e) => {
              setValue3(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

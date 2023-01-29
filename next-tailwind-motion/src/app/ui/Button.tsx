"use client";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const colors = {
  red: "conic-red",
  blue: "conic-blue",
};

export const NeonButton = ({
  className,
  color = "red",
}: PropsWithChildren<{
  className?: string;
  color?: keyof typeof colors;
}>) => {
  const classes = clsx([
    colors[color],
    "gradient-button py-2 px-4",
    "animate-increase-angle hover:[animation-duration:.5s]",
    className,
  ]);

  return (
    <div>
      <button
        className={classes}
        // style={{
        //   animationDuration: "1s",
        // }}
      >
        Label
      </button>
    </div>
  );
};

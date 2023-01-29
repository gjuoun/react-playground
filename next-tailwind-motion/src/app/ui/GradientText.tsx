"use client";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const colors = {
  red: "conic-red",
  blue: "conic-blue",
};

const blurSizeMap = {
  small: "[filter:blur(5px)]",
  medium: "[filter:blur(10px)]",
  large: "[filter:blur(20px)]",
};

export const GradientText = ({
  className,
  color = "red",
  loading = false,
  children,
  blurSize = "medium",
}: PropsWithChildren<{
  className?: string;
  color?: keyof typeof colors;
  loading?: unknown;
  blurSize?: keyof typeof blurSizeMap;
}>) => {
  const buttonClasses = clsx([
    colors[color],
    "relative font-bold bg-clip-text text-transparent",
    "animate-increase-angle ",
    Boolean(loading) && "[animation-duration:.5s]",
    className,
  ]);

  return <div className={buttonClasses}>{children}</div>;
};

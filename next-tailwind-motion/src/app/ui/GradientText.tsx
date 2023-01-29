"use client";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const colors = {
  red: "conic-red",
  blue: "conic-blue",
};

export const GradientText = ({
  className,
  color = "red",
  loading = false,
  children,
}: PropsWithChildren<{
  className?: string;
  color?: keyof typeof colors;
  loading?: unknown;
}>) => {
  const buttonClasses = clsx([
    colors[color],
    "relative font-bold bg-clip-text text-transparent",
    "animate-increase-angle bg-[length:200%]",
    Boolean(loading) && "[animation-duration:.5s]",
    className,
  ]);

  return <div className={buttonClasses}>{children}</div>;
};

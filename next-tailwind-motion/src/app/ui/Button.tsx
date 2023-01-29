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

export const GradientButton = ({
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
    "gradient-button py-2 px-4",
    "animate-increase-angle ",
    Boolean(loading) && "[animation-duration:.5s]",
    className,
  ]);

  const blurClasses = clsx([
    "absolute top-[calc(100%/10)] left-0 right-0 bottom-0 z-[-3] ",
    colors[color],
    Boolean(loading) && "[animation-duration:.5s]",
    blurSize && blurSizeMap[blurSize],
    "animate-increase-angle ",
  ]);

  return (
    <button className={buttonClasses}>
      {children}

      {blurSize && (
        <span
          style={{
            transform: "scale(0.9)",
          }}
          className={blurClasses}
        ></span>
      )}
    </button>
  );
};

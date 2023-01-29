import clsx from "clsx";
import { useMemo, useState } from "react";

const colors = {
  red: "conic-red",
  blue: "conic-blue",
};
interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: unknown;
  label: string;
}

export const GradientTextField = ({
  onFocus,
  onBlur,
  value,
  label,
  error,
  ...props
}: TextFieldProps) => {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  const labelClasses = useMemo(
    () =>
      clsx([
        "absolute bottom-0 left-0 right-0 transition-all ",
        "pointer-events-none bg-white",
        "font-bold bg-clip-text text-transparent animate-increase-angle",
        "origin-bottom-left",
        "bg-white bg-[length:200%]",
        focus && "scale-75 translate-y-[18px]",
        { "conic-red": Boolean(error) },
        { "conic-blue": Boolean(focus) && !Boolean(error) },
      ]),
    [error, focus]
  );

  const borderClasses = useMemo(
    () =>
      clsx([
        "h-[1px] transition-all animate-increase-angle bg-white bg-[length:200%]",
        { "conic-red": Boolean(error) },
        { "conic-blue": Boolean(focus || hover) && !Boolean(error) },
      ]),
    [error, focus, hover]
  );

  const errorClasses = useMemo(
    () =>
      clsx([
        "text-xs animate-increase-angle conic-red bg-[length:200%] font-bold bg-clip-text text-transparent",
      ]),
    []
  );

  return (
    <div className="w-full relative">
      <label className={labelClasses}>{label}</label>
      {typeof error === "string" && <div className={errorClasses}>{error}</div>}
      <input
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={(e) => {
          setFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          if (!value) {
            setFocus(false);
          }
          onBlur?.(e);
        }}
        value={value}
        className="text-white bg-black focus:outline-none"
        {...props}
      ></input>
      <div className={borderClasses}></div>
    </div>
  );
};

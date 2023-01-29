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
        "absolute left-0 bottom-0 transition-all ",
        "pointer-events-none bg-white",
        "font-bold bg-clip-text text-transparent animate-increase-angle",
        "origin-bottom-left",
        "bg-white bg-[length:200%]",
        { "scale-75 translate-y-[18px]": Boolean(focus) || Boolean(value) },
        { "conic-red": Boolean(error) },
        { "conic-blue": Boolean(focus) && !Boolean(error) },
      ]),
    [error, focus, value]
  );

  const borderClasses = useMemo(
    () =>
      clsx([
        "h-[1px] transition-all animate-increase-angle bg-white bg-[length:200%]",
        { "conic-red": Boolean(error) },
        { "conic-blue": Boolean(hover || focus) && !Boolean(error) },
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
    <div className="w-full relative mb-4">
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
          setFocus(false);
          setHover(false);
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

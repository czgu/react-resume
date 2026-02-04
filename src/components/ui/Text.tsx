import type { HeadingProps, TextProps } from "../../types";

export const Heading = ({
  weight = "bold",
  size = "1.4em",
  color = "black",
  children,
  className = "",
}: HeadingProps) => {
  return (
    <p
      className={`m-0 ${className}`}
      style={{
        fontWeight: weight,
        fontSize: size,
        color: color,
      }}
    >
      {children}
    </p>
  );
};

export const Text = ({
  weight = "500",
  size = "1em",
  color = "black",
  children,
  className = "",
}: TextProps) => {
  return (
    <p
      className={`m-0 leading-[1.5em] ${className}`}
      style={{
        fontWeight: weight,
        fontSize: size,
        color: color,
      }}
    >
      {children}
    </p>
  );
};

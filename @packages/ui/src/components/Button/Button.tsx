import type { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props}>{children}</button>
);

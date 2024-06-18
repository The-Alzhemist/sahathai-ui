import { HTMLProps } from "react";

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "classID"> {
  className?: string;
  labelRef?: React.ForwardedRef<HTMLLabelElement>;
  suffix?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

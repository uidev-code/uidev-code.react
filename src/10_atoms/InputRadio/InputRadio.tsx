import classNames from "classnames";
import type { ComponentProps, ReactNode } from "react";

import "./InputRadio.scss";

export interface InputRadioProps extends ComponentProps<"div"> {
  inputId: string;
  inputName: string;
  labelText: ReactNode;
  isChecked: boolean;
}

export const InputRadio = ({
  inputId,
  inputName,
  isChecked,
  labelText,
  className,
  children,
  ...restProps
}: InputRadioProps) => {
  return (
    <div className={classNames("field-box", className)} {...restProps}>
      <input className="radio" type="radio" name={inputName} id={inputId} checked={isChecked} />
      <label htmlFor="radio-1">{labelText}</label>
    </div>
  );
};

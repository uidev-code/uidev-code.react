import classNames from "classnames";
import type { ComponentProps } from "react";

import "./InputRadioCheckbox.scss";

export interface InputRadioCheckboxProps extends ComponentProps<"div"> {
  inputType: "radio" | "checkbox";
  inputId: string;
  inputName: string;
  labelText: string;
  isChecked: boolean;
  isInvalid?: boolean;
  errorText?: string;
  inputDisabled?: boolean;
  inputReadonly?: boolean;
}

export const InputRadioCheckbox = ({
  inputType = "radio",
  inputId,
  inputName,
  labelText,
  isChecked,
  isInvalid,
  errorText,
  inputDisabled = false,
  inputReadonly = false,
  className,
  children,
  ...restProps
}: InputRadioCheckboxProps) => {
  const fieldClass = classNames(className, {
    "is-invalid": isInvalid,
    "is-disabled": inputDisabled,
    "is-readonly": inputReadonly,
  });

  const errorId = isInvalid ? `${inputId}-error` : undefined;

  return (
    <div className={classNames("field-box", fieldClass)} {...restProps}>
      <div className={classNames(`${inputType}-box`)}>
        <input
          className={classNames(`${inputType}`)}
          type={classNames(`${inputType}`)}
          name={inputName}
          id={inputId}
          checked={isChecked}
          aria-invalid={isInvalid || undefined}
          aria-describedby={errorId}
        />
        <label htmlFor={inputId}>{labelText}</label>
      </div>
      {isInvalid && errorText && (
        <p id={errorId} className="error">
          {errorText}
        </p>
      )}
    </div>
  );
};

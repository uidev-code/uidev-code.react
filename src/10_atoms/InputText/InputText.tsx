import classNames from "classnames";
import type { ComponentProps, ReactNode } from "react";

import "./InputText.scss";

export interface InputTextProps extends ComponentProps<"div"> {
  alignHorizontal?: boolean;
  inputType: "text" | "password" | "email" | "tel" | "number" | "search";
  inputId: string;
  inputName: string;
  placeholder?: string;
  autocomplete?: "off" | "on";
  labelText?: string;
  labelRequired?: boolean;
  ariaLabel?: string;
  isInvalid?: boolean;
  errorText?: string;
  inputDisabled?: boolean;
  inputReadonly?: boolean;
  inputIcon?: ReactNode;
  inputWithButton?: ReactNode;
}

export const InputText = ({
  alignHorizontal,
  inputType = "text",
  inputId,
  inputName,
  placeholder,
  autocomplete,
  labelText,
  labelRequired,
  ariaLabel,
  isInvalid,
  errorText,
  inputDisabled = false,
  inputReadonly = false,
  inputIcon,
  inputWithButton,
  className,
  ...restProps
}: InputTextProps) => {
  const fieldClass = classNames("field", className, {
    "is-invalid": isInvalid,
    "is-disabled": inputDisabled,
    "is-readonly": inputReadonly,
  });
  const inputClass = classNames("form-control", "input-text");
  const errorId = isInvalid ? `${inputId}-error` : undefined;

  return (
    <div className={classNames("field-box", alignHorizontal && "align-horizontal")} {...restProps}>
      {labelText && (
        <label htmlFor={inputId} className="form-label">
          {labelText}
          {labelRequired && <span className="is-required">*</span>}
        </label>
      )}

      <div className="field-inbox">
        <div className={fieldClass}>
          {inputIcon}
          <input
            type={inputType}
            id={inputId}
            name={inputName}
            className={inputClass}
            placeholder={placeholder}
            disabled={inputDisabled}
            readOnly={inputReadonly}
            aria-invalid={isInvalid || undefined}
            aria-describedby={errorId}
            aria-disabled={inputDisabled || undefined}
            aria-readonly={inputReadonly || undefined}
            aria-label={ariaLabel !== "" ? ariaLabel : undefined}
            autocomplete={autocomplete !== "" ? autocomplete : undefined}
          />
          {inputWithButton}
        </div>
        {isInvalid && errorText && (
          <p id={errorId} className="error">
            {errorText}
          </p>
        )}
      </div>
    </div>
  );
};

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: "contained" | "outlined" | "text";
  btnText?: string;
  btnSize?: "sm" | "md" | "lg";
  customClass?: string;
  btnColorType?: "primary" | "secondary" | "accent" | "contrast" | "success" | "error" | "warning";
  btnIcon?: ReactNode;
  btnIconOnly?: boolean;
  btnRightIcon?: boolean;
  btnFullWidth?: boolean;
  btnPressed?: boolean;
  btnDisabled?: boolean;
  btnExpanded?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  btnType = "contained",
  btnText = "Button Text",
  btnSize = "md",
  customClass = "",
  btnColorType = "primary",
  btnIcon,
  btnIconOnly = false,
  btnRightIcon = false,
  btnFullWidth = false,
  btnPressed,
  btnDisabled,
  btnExpanded,
  ...restProps
}) => {
  const buttonClass = classNames(
    "btn",
    customClass,
    btnType && `btn-${btnType}`,
    btnColorType && `btn-${btnColorType}`,
    btnSize && `btn-size-${btnSize}`,
    { "btn-full-width": btnFullWidth },
    { "btn-right-icon": btnRightIcon },
    { "btn-icon-only": btnIconOnly },
  );

  return (
    <button
      className={buttonClass}
      aria-label={btnText}
      aria-pressed={typeof btnPressed === "boolean" ? btnPressed : undefined}
      aria-disabled={typeof btnDisabled === "boolean" ? btnDisabled : undefined}
      aria-expanded={typeof btnExpanded === "boolean" ? btnExpanded : undefined}
      disabled={btnDisabled}
      {...restProps}
    >
      {btnIcon && <span className="btn-icon">{btnIcon}</span>}
      {!btnIconOnly && <span className="btn-text">{btnText}</span>}
    </button>
  );
};

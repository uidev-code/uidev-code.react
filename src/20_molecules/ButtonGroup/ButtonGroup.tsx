import classnames from "classnames";
import type { ComponentProps } from "react";

import "./ButtonGroup.scss";

export interface ButtonGroupProps extends ComponentProps<"div"> {
  gap: "4xs" | "3xs" | "2xs" | "xs" | "md" | "lg" | "2xl" | "3xl" | "4xl";
}

export const ButtonGroup = ({ className, children, gap = "2xs", ...restProps }: ButtonGroupProps) => {
  const gapClass = gap !== "none" ? `gap-x-${gap}` : "";

  return (
    <div className={classnames("btn-group", gapClass, className)} {...restProps}>
      {children}
    </div>
  );
};

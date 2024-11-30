import classnames from "classnames";
import type { ComponentProps, ReactNode } from "react";

import "./ButtonGroup.scss";

export interface ButtonGroupProps extends ComponentProps<"div"> {}

export const ButtonGroup = ({ className, children, ...restProps }: ButtonGroupProps) => {
  return (
    <div className={classnames("btn-group", className)} {...restProps}>
      {children}
    </div>
  );
};

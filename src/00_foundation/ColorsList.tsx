import classNames from "classnames";
import type { ComponentProps } from "react";

import "./ColorsList.scss";

export interface ColorsListProps extends ComponentProps<"div"> {}

export const ColorsList = ({ className, children, ...restProps }: ColorsListProps) => {
  return (
    <div className={classNames("colors-list-wrapper", className)} {...restProps}>
      <div className="colors-list-box">{children}</div>
      <div className="colors-list-box theme-dark">{children}</div>
    </div>
  );
};

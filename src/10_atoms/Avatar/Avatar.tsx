import classnames from "classnames";
import type { ComponentProps } from "react";

import "./Avatar.scss";

export interface AvatarProps extends ComponentProps<"div"> {
  avatarColorType: "primary" | "secondary" | "accent" | "contrast" | "success" | "error" | "warning";
  avatarSize: "sm" | "md" | "lg";
}

export const Avatar = ({ className, children, ...restProps }: AvatarProps) => {
  return (
    <div className={classnames("ud-avatar", className)} {...restProps}>
      {children}
    </div>
  );
};

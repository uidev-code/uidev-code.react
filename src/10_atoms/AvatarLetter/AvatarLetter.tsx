import classNames from "classnames";
import type { ComponentProps } from "react";

import "./AvatarLetter.scss";

export interface AvatarLetterProps extends ComponentProps<"div"> {
  avatarLetter: string;
  avatarColorType: "primary" | "secondary" | "accent" | "contrast" | "success" | "error" | "warning";
}

export const AvatarLetter = ({
  avatarLetter = "UG",
  avatarColorType = "primary",
  className,
  children,
  ...restProps
}: AvatarLetterProps) => {
  return (
    <div className={classNames("ud-avatar-letter", `avatar-letter-${avatarColorType}`)} {...restProps}>
      {avatarLetter}
    </div>
  );
};

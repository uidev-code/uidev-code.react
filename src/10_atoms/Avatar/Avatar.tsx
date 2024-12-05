import classnames from "classnames";
import type { ComponentProps } from "react";

import { Img } from "../Img/Img";

import "./Avatar.scss";

export interface AvatarProps extends ComponentProps<"div"> {
  avatarImgURL: string;
  avatarAltText: string;
  avatarFallbackText: string;
}

export const Avatar = ({
  avatarImgURL,
  avatarAltText,
  avatarFallbackText,
  className,
  children,
  ...restProps
}: AvatarProps) => {
  return (
    <div className={classnames("ud-avatar", className)} {...restProps}>
      <Img src={avatarImgURL} alt={avatarAltText} />
      <div className="avatar-fallback">{avatarFallbackText}</div>
    </div>
  );
};

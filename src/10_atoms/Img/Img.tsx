import classnames from "classnames";
import type { ComponentProps } from "react";

import "./Img.scss";

export interface ImgProps extends ComponentProps<"div"> {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  aspectRatio?: "default" | "16:9" | "3:2" | "4:3" | "5:4" | "1:1" | "4:5" | "3:4" | "2:3" | "9:16";
}

export const Img = ({ src, alt, loading = "eager", aspectRatio = "default", className, ...restProps }: ImgProps) => {
  const mediaAspectRatio = aspectRatio && aspectRatio !== "default" ? `aspect-ratio-${aspectRatio}` : "";
  return (
    <div className={classnames("img-media-wrapper", mediaAspectRatio, className)} {...restProps}>
      <img src={src} alt={alt} {...(loading === "lazy" && { loading })} />
    </div>
  );
};

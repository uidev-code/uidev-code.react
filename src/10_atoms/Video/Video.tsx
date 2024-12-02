import classnames from "classnames";
import type { ComponentProps } from "react";

import "./Video.scss";

export interface VideoProps extends ComponentProps<"div"> {
  sources: { src: string; type: string }[];
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  posterUrl?: string;
  preload?: "auto" | "metadata" | "none";
  aspectRatio?: "default" | "16:9" | "3:2" | "4:3" | "5:4" | "1:1" | "4:5" | "3:4" | "2:3" | "9:16";
  alt: string;
}

export const Video = ({
  sources,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  posterUrl,
  preload = "none",
  aspectRatio = "default",
  alt,
  className,
  ...restProps
}: VideoProps) => {
  const mediaAspectRatio = aspectRatio && aspectRatio !== "default" ? `aspect-ratio-${aspectRatio}` : "";

  return (
    <div className={classnames("video-media-wrapper", mediaAspectRatio, className)} {...restProps}>
      <video autoPlay={autoplay} controls={controls} loop={loop} muted={muted} preload={preload} poster={posterUrl}>
        {sources.map(({ src, type }, index) => (
          <source key={index} src={src} type={type} />
        ))}
        {alt}
      </video>
    </div>
  );
};

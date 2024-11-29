import classnames from "classnames";
import type { ComponentProps } from "react";

import "./Audio.scss";

export interface AudioProps extends ComponentProps<"div"> {
  sources: { src: string; type: string }[];
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "auto" | "metadata" | "none";
  alt: string;
}

export const Audio = ({
  sources,
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  preload = "none",
  alt,
  className,
  ...restProps
}: AudioProps) => {
  return (
    <div className={classnames("ud-audio", className)} {...restProps}>
      <audio autoPlay={autoplay} controls={controls} loop={loop} muted={muted} preload={preload}>
        {sources.map(({ src, type }, index) => (
          <source key={index} src={src} type={type} />
        ))}
        {alt}
      </audio>
    </div>
  );
};

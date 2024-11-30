import { type Meta, type StoryObj } from "@storybook/react";
import { Video } from "./Video";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof Video> = {
  title: "Atoms/Media",
  component: Video,
  parameters: {
    layout: "centered",
  },
  decorators: [withPerformance],
  tags: ["media"],
};

export default meta;

export const videoExampleStory: StoryObj<typeof Video> = {
  name: "Video",
  args: {
    sources: [
      { src: "http://media.w3.org/2010/05/sintel/trailer.mp4", type: "video/mp4" },
      { src: "video.webm", type: "video/webm" },
      { src: "video.ogv", type: "video/ogg" },
    ],
    posterUrl: "https://assets.codepen.io/32795/poster.png",
    preload: "none",
    aspectRatio: "default",
    autoplay: false,
    controls: true,
    loop: false,
    muted: false,
    alt: "Your browser does not support the video tag.",
  },
  render: (args: any) => <Video {...args} />,
};

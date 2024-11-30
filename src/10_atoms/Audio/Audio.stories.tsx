import { Meta, Story } from "@storybook/react";
import { Audio } from "./Audio";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof Audio> = {
  title: "Atoms/Media",
  component: Audio,
  parameters: {
    layout: "centered",
  },
  decorators: [withPerformance],
  tags: ["media"],
};

export default meta;

export const audioExample: Story<typeof Audio> = {
  name: "Audio",
  args: {
    sources: [
      { src: "http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3", type: "audio/mpeg" },
      { src: "http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-2.ogg", type: "audio/ogg" },
    ],
    preload: "none",
    autoplay: false,
    controls: true,
    loop: false,
    muted: false,
    alt: "Your browser does not support the audio tag.",
  },
  render: (args: any) => <Audio {...args} />,
};

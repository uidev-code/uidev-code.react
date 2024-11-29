import type { Meta, StoryObj } from "@storybook/react";

import { Audio } from "./Audio";
import { withPerformance } from "storybook-addon-performance";

const meta = {
  title: "Atoms/Media",
  component: Audio,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [withPerformance],
  tags: ["media"],
} satisfies Meta<typeof Audio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const audioExample: Story = {
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
};

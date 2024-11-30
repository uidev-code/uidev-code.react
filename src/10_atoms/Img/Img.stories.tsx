import { type Meta, type StoryObj } from "@storybook/react";
import { Img } from "./Img";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof Img> = {
  title: "Atoms/Media",
  component: Img,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    aspectRatio: {
      control: "select",
      options: ["default", "16:9", "3:2", "4:3", "5:4", "1:1", "4:5", "3:4", "2:3", "9:16"],
    },
  },
  decorators: [withPerformance],
  tags: ["media"],
};

export default meta;

export const ImgExample1Story: StoryObj<typeof Img> = {
  name: "Image",
  args: {
    src: "https://picsum.photos/600/600",
    alt: "alt text",
    loading: "eager",
    aspectRatio: "1:1",
  },
  render: (args) => <Img {...args} />,
};

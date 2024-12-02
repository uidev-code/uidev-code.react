import { type Meta, type StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof Avatar> = {
  title: "Atoms",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  decorators: [withPerformance],
  tags: ["media"],
};

export default meta;

export const AvatarExampleStory: StoryObj<typeof Avatar> = {
  name: "Avatar",
  args: {},
  render: (args) => <Avatar {...args} />,
};

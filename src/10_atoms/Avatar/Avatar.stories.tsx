import { type Meta, type StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  decorators: [withPerformance],
  tags: ["media"],
};

export default meta;

export const AvatarImageStory: StoryObj<typeof Avatar> = {
  name: "Avatar",
  args: {
    avatarImgURL: "https://avatars.githubusercontent.com/u/124599?v=4",
    avatarAltText: "ugoon",
    avatarFallbackText: "UG",
  },
  render: (args) => <Avatar {...args} />,
};

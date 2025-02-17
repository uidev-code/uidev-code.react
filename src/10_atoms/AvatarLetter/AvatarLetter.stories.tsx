import { type Meta, type StoryObj } from "@storybook/react";
import { AvatarLetter } from "./AvatarLetter";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof AvatarLetter> = {
  title: "Atoms/Avatar",
  component: AvatarLetter,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [withPerformance],
  tags: ["tags"],
};

export default meta;

export const AvatarLetterExample1: StoryObj<typeof AvatarLetter> = {
  name: "AvatarLetter",
  args: {
    avatarLetter: "UD",
    avatarColorType: "primary",
  },
  render: (args) => <AvatarLetter {...args} />,
};

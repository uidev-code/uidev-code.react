import { type Meta, type StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { withPerformance } from "storybook-addon-performance";

import { Button } from "@atoms/Button/Button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Molecules",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [withPerformance],
  tags: ["button"],
};

export default meta;

export const ButtonGroupExample1: StoryObj<typeof ButtonGroup> = {
  name: "ButtonGroup",
  args: {},
  render: () => <ButtonGroup></ButtonGroup>,
};

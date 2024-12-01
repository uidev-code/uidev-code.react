import { type Meta, type StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { withPerformance } from "storybook-addon-performance";

import { Button } from "@atoms/Button/Button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  decorators: [withPerformance],
  tags: ["button-group"],
  argTypes: {
    gap: {
      control: {
        type: "select",
      },
      options: ["4xs", "3xs", "2xs", "xs", "md", "lg", "2xl", "3xl", "4xl"],
    },
  },
};

export default meta;

export const ButtonGroupNoGapStory: StoryObj<typeof ButtonGroup> = {
  name: "ButtonGroup",
  args: {
    gap: "2xs",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button btnText="Button 1" />
      <Button btnText="Button 2" />
      <Button btnText="Button 3" />
      <Button btnText="Button 4" />
      <Button btnText="Button 5" />
    </ButtonGroup>
  ),
};

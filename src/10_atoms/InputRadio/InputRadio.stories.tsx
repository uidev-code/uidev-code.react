import { type Meta, type StoryObj } from "@storybook/react";
import { InputRadio } from "./InputRadio";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof InputRadio> = {
  title: "Atoms/Forms",
  component: InputRadio,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [withPerformance],
  tags: ["tags"],
};

export default meta;

export const InputRadioExample1: StoryObj<typeof InputRadio> = {
  name: "InputRadio",
  args: {},
  render: (args) => <InputRadio {...args} />,
};

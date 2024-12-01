import { type Meta, type StoryObj } from "@storybook/react";
import { InputText } from "./InputText";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof InputText> = {
  title: "Atoms/Forms",
  component: InputText,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [withPerformance],
  tags: ["form", "input"],
};

export default meta;

export const InputTextExample1: StoryObj<typeof InputText> = {
  name: "Input Text",
  args: {
    inputType: "text",
    inputId: "input-text-01",
    inputName: "input-text",
    placeholder: "placeholder text",
    isInvalid: false,
    errorText: "",
    inputDisabled: false,
    inputReadonly: false,
    labelText: "label",
    ariaLabel: "",
    alignHorizontal: true,
  },
  render: (args) => <InputText {...args} />,
};

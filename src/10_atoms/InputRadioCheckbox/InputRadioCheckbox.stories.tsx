import { type Meta, type StoryObj } from "@storybook/react";
import { InputRadioCheckbox } from "./InputRadioCheckbox";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof InputRadioCheckbox> = {
  title: "Atoms/Forms",
  component: InputRadioCheckbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  decorators: [withPerformance],
  tags: ["tags"],
};

export default meta;

export const InputRadioStory: StoryObj<typeof InputRadioCheckbox> = {
  name: "Input Radio - Basic",
  args: {
    inputType: "radio",
    inputId: "radio-example-1",
    inputName: "radio-name-1",
    isChecked: true,
    labelText: "Label Text",
    isInvalid: false,
    errorText: "",
  },
  render: (args) => <InputRadioCheckbox {...args} />,
};

export const InputRadioInvalidStory: StoryObj<typeof InputRadioCheckbox> = {
  name: "Input Radio - Invalid",
  args: {
    inputType: "radio",
    inputId: "radio-example-1",
    inputName: "radio-name-1",
    isChecked: false,
    labelText: "Label Text",
    isInvalid: true,
    errorText: "error text",
  },
  render: (args) => <InputRadioCheckbox {...args} />,
};

export const InputCheckboxStory: StoryObj<typeof InputRadioCheckbox> = {
  name: "Input Checkbox",
  args: {
    inputType: "checkbox",
    inputId: "checkbox-example-1",
    inputName: "checkbox-name-1",
    isChecked: true,
    labelText: "Label Text",
  },
  render: (args) => <InputRadioCheckbox {...args} />,
};

import { type Meta, type StoryObj } from "@storybook/react";
import { InputText } from "./InputText";
import { Button } from "@atoms/Button/Button";
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

export const InputNoLabelFieldStory: StoryObj<typeof InputText> = {
  name: "Input Text - No Label",
  args: {
    inputType: "text",
    inputId: "input-text-01",
    inputName: "input-text",
    placeholder: "placeholder text",
    isInvalid: false,
    errorText: "",
    inputDisabled: false,
    inputReadonly: false,
    labelText: "",
    ariaLabel: "aria label text",
    alignHorizontal: true,
    autocomplete: "off",
    inputIcon: "",
    inputWithButton: "",
  },
  render: (args) => <InputText {...args} />,
};

export const InputFieldStory: StoryObj<typeof InputText> = {
  name: "Input Text - With Label",
  args: {
    inputType: "text",
    inputId: "input-text-01",
    inputName: "input-text",
    placeholder: "placeholder text",
    isInvalid: false,
    errorText: "",
    inputDisabled: false,
    inputReadonly: false,
    labelText: "label text",
    ariaLabel: "",
    alignHorizontal: true,
    autocomplete: "off",
    inputIcon: "",
    inputWithButton: "",
  },
  render: (args) => <InputText {...args} />,
};

export const InputIconFieldButtonStory: StoryObj<typeof InputText> = {
  name: "Input Text - With Label + Button",
  args: {
    inputType: "text",
    inputId: "input-text-01",
    inputName: "input-text",
    placeholder: "placeholder text",
    isInvalid: false,
    errorText: "",
    inputDisabled: false,
    inputReadonly: false,
    labelText: "label text",
    ariaLabel: "",
    alignHorizontal: true,
    autocomplete: "off",
    inputIcon: "",
    inputWithButton: (
      <Button
        btnColorType="secondary"
        btnIconOnly={true}
        btnIcon={<i className="bx bx-search-alt-2"></i>}
        btnSize="sm"
      />
    ),
  },
  render: (args) => <InputText {...args} />,
};

//

export const InputIconFieldStory: StoryObj<typeof InputText> = {
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
    labelText: "",
    ariaLabel: "aria label text",
    alignHorizontal: true,
    autocomplete: "off",
    inputIcon: <i className="bx bx-search-alt-2"></i>,
    inputWithButton: "",
  },
  render: (args) => <InputText {...args} />,
};

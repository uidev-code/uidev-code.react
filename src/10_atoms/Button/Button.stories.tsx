import { type Meta, type StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {},
  decorators: [withPerformance],
  tags: ["button"],
};

export default meta;

export const ButtonTextStory: StoryObj<typeof Button> = {
  name: "Button",
  args: {
    btnText: "Button",
    btnType: "contained",
    btnSize: "md",
    btnColorType: "primary",
    btnFullWidth: false,
    btnDisabled: false,
    btnExpanded: false,
    btnRightIcon: false,
    btnIconOnly: false,
    btnLoading: false,
  },
  render: (args) => <Button {...args} />,
};

export const ButtonIconStory: StoryObj<typeof Button> = {
  name: "Icon Text Button",
  args: {
    btnText: "Button",
    btnType: "contained",
    btnSize: "md",
    btnColorType: "primary",
    btnFullWidth: false,
    btnDisabled: false,
    btnExpanded: false,
    btnIcon: <i className="bx bx-universal-access" />,
    btnRightIcon: false,
    btnIconOnly: false,
    btnLoading: false,
  },
  render: (args) => <Button {...args} />,
};

export const ButtonIconOnlyStory: StoryObj<typeof Button> = {
  name: "Icon Only Button",
  args: {
    btnText: "Button",
    btnType: "contained",
    btnSize: "md",
    btnColorType: "primary",
    btnFullWidth: false,
    btnDisabled: false,
    btnExpanded: false,
    btnIcon: <i className="bx bx-universal-access" />,
    btnRightIcon: false,
    btnIconOnly: true,
    btnLoading: false,
  },
  render: (args) => <Button {...args} />,
};

export const ButtonLoadingStory: StoryObj<typeof Button> = {
  name: "Loading Button",
  args: {
    btnText: "Button",
    btnType: "contained",
    btnSize: "md",
    btnColorType: "primary",
    btnFullWidth: false,
    btnDisabled: false,
    btnExpanded: false,
    btnIcon: <i className="bx bx-universal-access" />,
    btnRightIcon: false,
    btnIconOnly: false,
    btnLoading: true,
  },
  render: (args) => <Button {...args} />,
};

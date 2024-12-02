import { type Meta, type StoryObj } from "@storybook/react";
import { ColorsList } from "./colorsList";
import { withPerformance } from "storybook-addon-performance";

const meta: Meta<typeof ColorsList> = {
  title: "Foundation",
  component: ColorsList,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [withPerformance],
  tags: ["foundation"],
};

export default meta;

export const colorsListExample1: StoryObj<typeof ColorsList> = {
  name: "Colors List",
  args: {},
  render: (args) => (
    <ColorsList {...args}>
      <h4>Primary</h4>
      <div className="bg-primary-lighter">var(--color-primary)</div>
      <div className="bg-primary-light">var(--color-primary)</div>
      <div className="bg-primary">var(--color-primary)</div>
      <div className="bg-primary-dark">var(--color-primary)</div>
      <div className="bg-primary-darker">var(--color-primary)</div>

      <h4>Success</h4>
      <div className="bg-success-lighter">var(--color-success-lighter)</div>
      <div className="bg-success-light">var(--color-success-light)</div>
      <div className="bg-success">var(--color-success)</div>
      <div className="bg-success-dark">var(--color-success-dark)</div>
      <div className="bg-success-darker">var(--color-success-darker)</div>

      <h4>Error</h4>
      <div className="bg-error-lighter">var(--color-error-lighter)</div>
      <div className="bg-error-light">var(--color-error-light)</div>
      <div className="bg-error">var(--color-error)</div>
      <div className="bg-error-dark">var(--color-error-dark)</div>
      <div className="bg-error-darker">var(--color-error-darker)</div>

      <h4>warning</h4>
      <div className="bg-warning-lighter">var(--color-warning-lighter)</div>
      <div className="bg-warning-light">var(--color-warning-light)</div>
      <div className="bg-warning">var(--color-warning)</div>
      <div className="bg-warning-dark">var(--color-warning-dark)</div>
      <div className="bg-warning-darker">var(--color-warning-darker)</div>
    </ColorsList>
  ),
};

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-a11y",
    "storybook-addon-performance",
    "@storybook/addon-designs",
    "@storybook/addon-highlight",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../src/assets"],
};
export default config;

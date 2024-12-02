import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

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
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../src/assets"],
  viteFinal: async (config) => {
    config.resolve = {
      alias: {
        "@.storybook": path.resolve(__dirname, ".storybook"),
        "@": path.resolve(__dirname, "../src"),
        "@foundation": path.resolve(__dirname, "../src/00_foundation"),
        "@atoms": path.resolve(__dirname, "../src/10_atoms"),
        "@molecules": path.resolve(__dirname, "../src/20_molecules"),
        "@organisms": path.resolve(__dirname, "../src/30_organisms"),
        "@template": path.resolve(__dirname, "../src/40_template"),
        "@pages": path.resolve(__dirname, "../src/50_pages"),
        "@assets": path.resolve(__dirname, "../src/assets"),
        "@styles": path.resolve(__dirname, "../src/assets/scss"),
      },
    };
    return config;
  },
};
export default config;

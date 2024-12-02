import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "./storybook.scss";
import "@styles/_reset.scss";
import "@styles/_fonts.scss";
import "@styles/_typo.scss";
import "@styles/_preview.scss";
import "@styles/_util.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      panelPosition: "bottom",
      storySort: {
        method: "alphabetical",
      },
      darkMode: {
        current: "light",
        darkClass: "lights-out",
        lightClass: "lights-on",
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "theme-dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;

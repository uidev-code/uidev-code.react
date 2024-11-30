import type { Preview } from "@storybook/react";

import "./storybook.scss";
import "../src/assets/scss/_reset.scss";
import "../src/assets/scss/_fonts.scss";
import "../src/assets/scss/_typo.scss";
import "../src/assets/scss/_preview.scss";
import "../src/assets/scss/_util.scss";

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
    },
  },
};

export default preview;

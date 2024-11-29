import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    brandTitle: "UIDEV-CODE.STORYBOOK",
    brandUrl: "./",
    brandTarget: "_self",
    colorPrimary: "hsl(250, 84%, 54%)",
  }),
});

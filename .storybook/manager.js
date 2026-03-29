/**
 * .storybook/manager.js  Storybook Manager Configuration
 *
 * Customizes the Storybook UI shell (sidebar, toolbar, favicon).
 *
 * Learn more: https://storybook.js.org/docs/configure/user-interface/theming
 */
import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const theme = create({
  base: "light",

  // Sidebar branding
  brandTitle: "",
  brandUrl: "",
  brandTarget: "_blank",
});

addons.setConfig({
  theme,
  favicon: "/favicon.png",
});

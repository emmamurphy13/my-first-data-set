/**
 * .storybook/main.js  Storybook Configuration
 *
 * This file configures Storybook for the SvelteKit project.
 * It tells Storybook where to find stories, which addons to use,
 * and which framework to use for rendering components.
 *
 * Learn more: https://storybook.js.org/docs/configure
 */

import remarkGfm from "remark-gfm";

/** @type {import('@storybook/sveltekit').StorybookConfig} */
const config = {
  // Story files: look for .stories.svelte and .mdx files in the src directory
  stories: ["../src/**/*.stories.svelte", "../src/**/*.mdx"],

  // Addons enhance Storybook with extra features
  addons: [
    // Autodocs renderer for Svelte stories and MDX documentation pages
    // remark-gfm enables GitHub Flavored Markdown (tables, strikethrough, etc.) in .mdx files
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    // Svelte CSF: allows writing stories as .svelte files (cleaner for slot/children content)
    "@storybook/addon-svelte-csf",
    // Accessibility: runs axe-core against every story to surface WCAG violations
    "@storybook/addon-a11y",
  ],

  // Use the SvelteKit framework (handles $app/* mocks, $lib aliases, SCSS, etc.)
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },

  // Serve SvelteKit's static/ folder so assets like images and GIFs resolve at the same paths
  staticDirs: ["../static"],

  // Opt out of Storybook's anonymous usage telemetry
  core: {
    disableTelemetry: true,
  },

  // Enable auto-generated documentation pages for components tagged with 'autodocs'
  docs: {
    autodocs: "tag",
  },
};

export default config;

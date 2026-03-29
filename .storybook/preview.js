/**
 * .storybook/preview.js  Storybook Preview Configuration
 *
 * This file sets up the global environment for all stories.
 * It imports global styles so CSS custom properties are available
 * in every story, matching the live site's appearance.
 *
 * Learn more: https://storybook.js.org/docs/configure#configure-story-rendering
 */

// Import global styles so CSS custom properties and typography are applied
import '../src/app.scss';

/** @type {import('@storybook/sveltekit').Preview} */
const preview = {
  parameters: {
    // Default layout for all stories
    layout: 'padded',

    // Configure background options to match the site's color scheme
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light gray', value: '#f5f5f5' },
        { name: 'CUNY Blue', value: '#0033A1' },
      ],
    },

    // Sort stories so Introduction appears first, Design Tokens second, then the rest
    options: {
      storySort: {
        order: ['Introduction', 'Design Tokens', '*'],
      },
    },

    // Viewport presets for testing responsive layouts.
    // Use the toolbar icon (or keyboard shortcut) to switch between sizes.
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        mobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '812px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop (1280px)',
          styles: { width: '1280px', height: '900px' },
          type: 'desktop',
        },
        wide: {
          name: 'Wide (1440px)',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
      },
    },
  },
};

export default preview;

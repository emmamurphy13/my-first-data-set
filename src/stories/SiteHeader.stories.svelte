<!--
  SiteHeader.stories.svelte

  Stories for the SiteHeader component.
  SiteHeader displays the NYCity News Service masthead with an animated gradient
  background and optional navigation links.

  Props:
  - navLinks: Array of { href, label } objects for navigation items
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SiteHeader from '$lib/components/SiteHeader.svelte';

  const { Story } = defineMeta({
    title: 'Components/SiteHeader',
    component: SiteHeader,
    tags: ['autodocs'],
    parameters: {
      // Use fullscreen layout so the header spans the full story width
      layout: 'fullscreen',
    },
    argTypes: {
      navLinks: {
        control: 'object',
        description: 'Array of navigation link objects with href and label properties',
      },
    },
  });
</script>

<!-- Default: header with the standard navigation links -->
<Story name="Default" />

<!-- No Navigation: header with nav links removed -->
<Story name="No Navigation" args={{ navLinks: [] }} />

<!-- Single Link: header with just one navigation item -->
<Story
  name="Single Link"
  args={{
    navLinks: [{ href: 'https://www.nycitynewsservice.com/nycns_topics/education/', label: 'Education' }],
  }}
/>

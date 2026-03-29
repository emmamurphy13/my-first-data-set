<!--
  SiteFooter.stories.svelte

  Stories for the SiteFooter component.
  SiteFooter displays the CUNY logo and navigation links at the bottom of every page.

  This component takes no props — it renders the standard footer layout.
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

  const { Story } = defineMeta({
    title: 'Components/SiteFooter',
    component: SiteFooter,
    tags: ['autodocs'],
    parameters: {
      // Use fullscreen layout so the footer spans the full story width
      layout: 'fullscreen',
    },
  });
</script>

<!-- Default: the standard site footer -->
<Story name="Default" />

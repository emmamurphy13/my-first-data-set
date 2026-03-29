<!--
@component
This is the LAYOUT file.
It wraps every page on your site.
Use it for headers, footers, and navigation that appear on all pages.
-->
<script>
  // Import global styles
  import '../app.scss';

  // Import site-wide components
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';

  // Access page-level settings (from +page.js)
  import { page } from '$app/state';

  // In Svelte 5, we use $props() to receive the page content
  let { children } = $props();

</script>

{#if page.data.showHeader !== false}
  <SiteHeader />
{/if}

<main>
  <!-- This renders the current page's content -->
  {@render children()}
</main>

{#if page.data.showFooter !== false}
  <SiteFooter />
{/if}

<style>
  /* Styles here only apply to this layout */
  main {
    min-height: calc(100vh - var(--site-chrome-height)); /* Ensure footer stays at bottom */
  }
</style>

<!--
@component
RelatedLinks.svelte — NYCity News Service Style Related Stories

Displays a "Related Stories" or "Recent News" section at the bottom
of articles with blue accent heading style.

USAGE EXAMPLE:
<RelatedLinks
  title="RELATED STORIES"
  links={[
    { headline: 'Mayor Announces New Transit Plan', href: '/transit-plan' },
    { headline: 'Budget Talks Continue Downtown', href: '/budget-talks' }
  ]}
/>
-->
<script>
  let {
    title = 'RELATED STORIES',
    links = [],
  } = $props();
</script>

{#if links.length > 0}
  <aside class="related-links" aria-labelledby="related-title">
    <h2 id="related-title" class="related-title">
      <span class="title-text">{title}</span>
    </h2>
    <ul class="link-list">
      {#each links as link (link.href)}
        <li class="link-item">
          <a href={link.href} class="link">
            {link.headline}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}

<style lang="scss">
  @use '../styles' as *;

  .related-links {
    margin-top: var(--spacing-xl);
  }

  .related-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wider);
    color: var(--color-dark);
    margin-bottom: var(--spacing-md);

    &::after {
      content: '';
      flex: 1;
      height: var(--border-width-divider);
      background-color: var(--color-accent);
    }
  }

  .link-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .link-item {
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: var(--border-width-thin) solid var(--color-border);

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  .link {
    font-family: var(--font-serif);
    font-size: var(--font-size-lg); // Mobile-first: smaller size
    font-weight: var(--font-weight-normal);
    color: var(--color-dark);
    text-decoration: none;
    line-height: var(--leading-snug);
    display: block;
    transition: var(--transition-color);

    &:hover {
      color: var(--color-accent);
      text-decoration: none;
    }

    @include tablet {
      font-size: var(--font-size-xl); // Larger screens: bigger size
    }
  }
</style>

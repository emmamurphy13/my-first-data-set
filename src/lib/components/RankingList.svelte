<!--
@component
RankingList.svelte — A container for RankingCard items with an optional title.
-->
<script>
  let {
    title = '',
    children,
  } = $props();
</script>

<div class="ranking-list">
  {#if title}
    <h2 class="ranking-list-title">{title}</h2>
  {/if}
  <div class="ranking-list-items">
    {@render children()}
  </div>
</div>

<style lang="scss">
  .ranking-list {
    border: 1px solid var(--color-border, #ddd);
    border-radius: 4px;
    overflow: hidden;
    background: var(--color-white, #fff);
  }

  .ranking-list-title {
    margin: 0;
    padding: var(--spacing-sm, 0.75rem) var(--spacing-md, 1rem);
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: var(--color-light-gray, #f5f5f5);
    border-bottom: 1px solid var(--color-border, #ddd);
  }

  .ranking-list-items {
    :global(> :last-child) {
      border-bottom: none;
    }
  }
</style>

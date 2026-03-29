<!--
@component
RankingCard.svelte — A horizontal card showing rank, optional image, title, and description.
-->
<script>
  let {
    rank = 0,
    href = '',
    image = '',
    imageAlt = '',
    title = '',
    description = '',
    value = '',
    valueLabel = '',
  } = $props();
</script>

{#snippet cardContent()}
  <span class="rank">{rank}</span>
  {#if image}
    <div class="thumbnail">
      <img src={image} alt={imageAlt} />
    </div>
  {/if}
  <div class="content">
    <h3 class="title">{title}</h3>
    {#if description}
      <p class="description">{description}</p>
    {/if}
  </div>
  {#if value}
    <div class="value">
      <span class="value-number">{value}</span>
      {#if valueLabel}
        <span class="value-label">{valueLabel}</span>
      {/if}
    </div>
  {/if}
{/snippet}

{#if href}
  <a {href} class="ranking-card ranking-card-link">
    {@render cardContent()}
  </a>
{:else}
  <div class="ranking-card">
    {@render cardContent()}
  </div>
{/if}

<style lang="scss">
  .ranking-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-md, 1rem);
    padding: var(--spacing-sm, 0.75rem) var(--spacing-md, 1rem);
    border-bottom: 1px solid var(--color-border, #ddd);
  }

  .ranking-card-link {
    color: inherit;
    text-decoration: none;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: var(--color-light-gray, #f5f5f5);
    }
  }

  .rank {
    flex-shrink: 0;
    font-size: 1.5rem;
    font-weight: 700;
    min-width: 2ch;
    text-align: center;
    color: var(--color-accent, #003da5);
  }

  .thumbnail {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .content {
    flex: 1;
    min-width: 0;
  }

  .title {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .description {
    margin: 0.25rem 0 0;
    font-size: 0.875rem;
    color: var(--color-text-secondary, #555);
    line-height: 1.4;
  }

  .value {
    flex-shrink: 0;
    text-align: right;
    margin-left: auto;
  }

  .value-number {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .value-label {
    display: block;
    font-size: 0.75rem;
    color: var(--color-text-secondary, #555);
    line-height: 1.3;
  }
</style>

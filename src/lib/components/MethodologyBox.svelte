<!--
@component
MethodologyBox.svelte — A bordered box that explains the methodology, data
sources, or reporting process behind a story. Typically placed at the bottom
of an article.
-->
<script>
  let {
    title = 'How We Reported This Story',
    children,
  } = $props();
</script>

<aside class="methodology-box" aria-label="Methodology">
  <h3 class="methodology-title">{title}</h3>
  <div class="methodology-body">
    {@render children()}
  </div>
</aside>

<style lang="scss">
  @use '../styles' as *;

  .methodology-box {
    border-top: var(--border-width-accent) solid var(--color-accent);
    background-color: var(--color-light-gray);
    padding: var(--spacing-md);
    margin-top: var(--spacing-xl);
    margin-bottom: var(--spacing-lg);
    max-width: var(--max-width);
  }

  .methodology-title {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wider);
    color: var(--color-dark);
    margin-bottom: var(--spacing-xs);
  }

  .methodology-body {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    line-height: var(--leading-relaxed);
    color: var(--color-text);
  }

  .methodology-body :global(p) {
    margin-bottom: var(--spacing-xs);
  }

  .methodology-body :global(p:last-child) {
    margin-bottom: 0;
  }

  .methodology-body :global(a) {
    color: var(--color-accent);
    text-decoration: underline;
  }

  .methodology-body :global(a:hover) {
    color: var(--color-dark);
  }

  @include tablet {
    .methodology-box {
      padding: var(--spacing-md) var(--spacing-lg);
    }

    .methodology-body {
      font-size: var(--font-size-base);
    }
  }
</style>

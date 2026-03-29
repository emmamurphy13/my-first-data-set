<!--
@component
DatabaseHeader.svelte — A full-width hero header with optional background color,
headline, byline, date, description, children slot for additional content (e.g.
search controls), and an optional graphic snippet that renders in a right column.

When `graphic` is provided the inner layout becomes a two-column flex row
(text + controls on the left, graphic on the right). Without `graphic` the
layout is single-column and backward-compatible.
-->
<script>
  let {
    headline = '',
    description = '',
    byline = '',
    date = '',
    bgColor = 'var(--color-light-gray)',
    children,
    graphic,
  } = $props();
</script>

<header
  class="hero-header"
  style:background-color={bgColor}
>
  <div class="hero-inner" class:has-graphic={!!graphic}>
    <div class="hero-left">
      <div class="hero-content">
        {#if headline}
          <h1 class="hero-headline">{headline}</h1>
        {/if}
        {#if description}
          <p class="hero-description">{description}</p>
        {/if}
        {#if byline}
          <p class="hero-byline">{byline}</p>
        {/if}
        {#if date}
          <p class="hero-date">{date}</p>
        {/if}
      </div>
      {#if children}
        <div class="hero-extra">
          {@render children()}
        </div>
      {/if}
    </div>
    {#if graphic}
      <div class="hero-graphic">
        {@render graphic()}
      </div>
    {/if}
  </div>
</header>

<style lang="scss">
  @use '../styles' as *;

  .hero-header {
    width: 100%;
    padding: var(--spacing-lg) var(--spacing-md);
  }

  .hero-inner {
    max-width: var(--max-width-wide);
    margin: 0 auto;
  }

  /* Two-column layout when a graphic snippet is provided */
  .hero-inner.has-graphic {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .hero-left {
    flex: 1;
  }

  .hero-content {
    max-width: var(--max-width);
  }

  .hero-headline {
    font-family: var(--font-serif);
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    line-height: var(--leading-tight);
    color: var(--color-dark);
    margin-bottom: var(--spacing-xs);
  }

  .hero-byline {
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    color: var(--color-medium-gray);
    margin: var(--spacing-xxs) 0;
  }

  .hero-date {
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    color: var(--color-medium-gray);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wider);
    margin: var(--spacing-xxs) 0;
  }

  .hero-description {
    font-family: var(--font-sans);
    font-size: var(--font-size-lg);
    line-height: var(--leading-base);
    color: var(--color-text);
    margin-bottom: var(--spacing-sm);
  }

  .hero-extra {
    margin-top: var(--spacing-md);
  }

  .hero-graphic {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
  }

  @include tablet {
    .hero-header {
      padding: var(--spacing-xxl) var(--spacing-md);
    }

    .hero-inner.has-graphic {
      flex-direction: row;
      align-items: center;
    }

    .hero-headline {
      font-size: var(--font-size-6xl);
    }

    .hero-description {
      font-size: var(--font-size-xl);
    }

    .hero-graphic {
      max-width: none;
    }
  }

  @include desktop {
    .hero-inner {
      padding: 0 var(--spacing-md);
    }
    .hero-headline {
      font-size: var(--font-size-display);
    }
  }
</style>

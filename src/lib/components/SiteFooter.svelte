<!--
@component
SiteFooter.svelte — NYPL-inspired footer

USAGE EXAMPLE:
<SiteFooter />
-->
<script>
  import { asset, base } from '$app/paths';
</script>

<footer class="site-footer">
  <div class="footer-container">
    <a href={`${base}/`} class="footer-brand" aria-label="Library home">
      <img class="footer-logo-mark" src={asset('/static:nypl-lion.png')} alt="" aria-hidden="true" />
      <span>The New York Public Library</span>
    </a>

    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="https://www.nypl.org/locations" class="footer-link">Hours & Locations</a>
      <span class="footer-divider">|</span>
      <a href="https://www.nypl.org/library-card" class="footer-link">Get a Library Card</a>
      <span class="footer-divider">|</span>
      <a href="https://www.nypl.org/support" class="footer-link">Donate</a>
    </nav>
  </div>
</footer>

<style>
  .site-footer {
    background-color: #111;
    color: #f7f7f7;
    padding: var(--spacing-lg) var(--spacing-md);
    margin-top: var(--spacing-xxl);
  }

  .footer-container {
    max-width: var(--max-width-wide);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: center;
  }

  .footer-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #fff;
    text-decoration: none;
    font-family: var(--font-serif);
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  .footer-logo-mark {
    width: 22px;
    height: 22px;
  }

  .footer-link {
    color: #f5f5f5;
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0.02em;
    transition: var(--transition-color);
  }

  .footer-link:hover {
    color: #d62839;
  }

  .footer-divider {
    color: #888;
    margin: 0 var(--spacing-sm);
  }

  @media (min-width: 900px) {
    .footer-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>

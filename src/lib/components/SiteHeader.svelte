<!--
@component
SiteHeader.svelte — NYPL-inspired header
-->
<script>
  import { asset, base } from '$app/paths';

  let {
    navLinks = [
      { label: 'Books & Research', href: 'https://www.nypl.org/books-music-movies' },
      { label: 'Events', href: 'https://www.nypl.org/events/calendar' },
      { label: 'Locations', href: 'https://www.nypl.org/locations' },
      { label: 'Get a Card', href: 'https://www.nypl.org/library-card' },
      { label: 'Support', href: 'https://www.nypl.org/support' },
    ],
  } = $props();
</script>

<header class="site-header">
  <div class="topbar"></div>
  <div class="masthead">
    <a href={`${base}/`} class="logo" aria-label="New York Public Library style site">
      <img class="logo-mark" src={asset('/static:nypl-lion.png')} alt="" aria-hidden="true" />
      <span class="logo-text">
        <span class="logo-line">New York</span>
        <span class="logo-line">Public</span>
        <span class="logo-line logo-line-strong">Library</span>
      </span>
    </a>

    {#if navLinks.length > 0}
      <nav class="main-nav" aria-label="Main navigation">
        <ul class="nav-list">
          {#each navLinks as link (link.label)}
            <li><a href={link.href} class="nav-link">{link.label}</a></li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</header>

<style lang="scss">
  .site-header {
    background: #fff;
    border-bottom: 1px solid #e4ddd3;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .topbar {
    height: 6px;
    background: #d62839;
  }

  .masthead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.9rem 1rem;
  }

  .logo {
    display: inline-flex;
    align-items: flex-start;
    gap: 0.85rem;
    text-decoration: none;
    color: #111;
  }

  .logo-mark {
    width: 78px;
    height: 78px;
    flex: 0 0 auto;
  }

  .logo-text {
    display: grid;
    gap: 0;
  }

  .logo-line {
    font-family: var(--font-serif);
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 1.04;
  }

  .logo-line-strong {
    font-family: var(--font-sans);
    font-weight: 700;
    margin-top: 0.12rem;
  }

  .main-nav {
    display: none;
  }

  .nav-list {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: #1a1a1a;
    text-decoration: none;
    font-family: var(--font-sans);
    font-size: 0.82rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 2px solid transparent;
    padding-bottom: 0.15rem;
    transition: border-color 0.2s ease, color 0.2s ease;
  }

  .nav-link:hover {
    color: #d62839;
    border-color: #d62839;
    text-decoration: none;
  }

  @media (min-width: 900px) {
    .main-nav {
      display: flex;
      align-items: center;
    }
  }
</style>

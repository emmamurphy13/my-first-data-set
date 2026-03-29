<!--
@component
SearchInput.svelte — A search text input with magnifying glass icon.
-->
<script>
  let {
    placeholder = 'Search…',
    value = $bindable(''),
    label = 'Search',
    oninput = () => {},
  } = $props();
</script>

<div class="search-input">
  <label class="search-label" for="search-field">{label}</label>
  <div class="input-wrapper">
    <svg
      class="search-icon"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <input
      id="search-field"
      class="search-field"
      type="search"
      {placeholder}
      bind:value
      oninput={oninput}
    />
  </div>
</div>

<style lang="scss">
  @use '../styles' as *;

  .search-input {
    width: 100%;
  }

  .search-label {
    display: block;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--color-dark);
    margin-bottom: var(--spacing-xxs);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wider);
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    left: var(--spacing-xs);
    color: var(--color-medium-gray);
    pointer-events: none;
  }

  .search-field {
    width: 100%;
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    line-height: var(--leading-normal);
    color: var(--color-text);
    background-color: var(--color-white);
    border: var(--border-width-thin) solid var(--color-border);
    border-radius: var(--border-radius-sm);
    padding: var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-lg);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: var(--color-medium-gray);
    }

    &:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(0, 51, 161, 0.15);
    }
  }

  @include tablet {
    .search-field {
      font-size: var(--font-size-lg);
    }
  }
</style>

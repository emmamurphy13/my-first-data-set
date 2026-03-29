<!--
@component
DropdownInput.svelte — A styled select dropdown input.
-->
<script>
  let {
    options = [],
    value = '',
    label = 'Select',
    placeholder = 'Choose an option…',
    onchange = () => {},
  } = $props();
</script>

<div class="dropdown-input">
  <label class="dropdown-label" for="dropdown-field">{label}</label>
  <div class="select-wrapper">
    <select
      id="dropdown-field"
      class="dropdown-field"
      {value}
      onchange={onchange}
    >
      {#if placeholder}
        <option value="" selected>{placeholder}</option>
      {/if}
      {#each options as option (option.value)}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
    <svg
      class="dropdown-arrow"
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
</div>

<style lang="scss">
  @use '../styles' as *;

  .dropdown-input {
    width: 100%;
  }

  .dropdown-label {
    display: block;
    font-family: var(--font-sans);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    color: var(--color-dark);
    margin-bottom: var(--spacing-xxs);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wider);
  }

  .select-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .dropdown-field {
    width: 100%;
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    line-height: var(--leading-normal);
    color: var(--color-text);
    background-color: var(--color-white);
    border: var(--border-width-thin) solid var(--color-border);
    border-radius: var(--border-radius-sm);
    padding: var(--spacing-xs) var(--spacing-lg) var(--spacing-xs) var(--spacing-sm);
    appearance: none;
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(0, 51, 161, 0.15);
    }
  }

  .dropdown-arrow {
    position: absolute;
    right: var(--spacing-xs);
    color: var(--color-medium-gray);
    pointer-events: none;
  }

  @include tablet {
    .dropdown-field {
      font-size: var(--font-size-lg);
    }
  }
</style>

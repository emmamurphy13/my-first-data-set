<!--
@component
LibraryAttendanceCards.svelte — Card grid for library program attendance metrics.
-->
<script>
  import Card from '$lib/components/Card.svelte';

  let {
    title = 'Top Library Attendance by Borough',
    groups = [],
  } = $props();

  let activeLibrary = $state(null);

  const openLibrary = (borough, library) => {
    activeLibrary = { borough, ...library };
  };

  const closeLibrary = () => {
    activeLibrary = null;
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape' && activeLibrary) closeLibrary();
  };

  const formatNumber = (value) =>
    new Intl.NumberFormat('en-US').format(Number(value) || 0);
</script>

<section class="attendance-cards" aria-label={title}>
  {#if title}
    <h2 class="attendance-title">{title}</h2>
  {/if}

  {#each groups as group}
    <h3 class="borough-title">{group.borough}</h3>
    {#if group.libraries.length === 0}
      <p class="no-data">Data currently unavailible</p>
    {:else}
      <div class="attendance-grid">
        {#each group.libraries as library}
          <Card>
            <button
              type="button"
              class="card-trigger"
              onclick={() => openLibrary(group.borough, library)}
            >
              <h4>{library.location}</h4>
              <p class="metric metric-total">
                <span class="metric-label">Attendance</span>
                <span class="metric-value">{formatNumber(library.attendance)}</span>
              </p>
            </button>
          </Card>
        {/each}
      </div>
    {/if}
  {/each}
</section>

<svelte:window onkeydown={handleEscape} />

{#if activeLibrary}
  <div class="modal-layer">
    <button
      type="button"
      class="modal-backdrop"
      aria-label="Close library details"
      onclick={closeLibrary}
    ></button>

    <div
      class="modal-card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="library-modal-title"
      tabindex="-1"
    >
      <button type="button" class="close-button" aria-label="Close" onclick={closeLibrary}>×</button>

      <h3 id="library-modal-title" class="modal-title">{activeLibrary.location}</h3>
      <p class="modal-subtitle">{activeLibrary.borough}</p>

      <p class="metric metric-total modal-total">
        <span class="metric-label">Attendance</span>
        <span class="metric-value">{formatNumber(activeLibrary.attendance)}</span>
      </p>

      <div class="details-content">
        <p class="metric">
          <span class="metric-label">Adult attendance</span>
          <span>{formatNumber(activeLibrary.adultAttendance)}</span>
        </p>
        <p class="metric">
          <span class="metric-label">Young adult attendance</span>
          <span>{formatNumber(activeLibrary.youngAdultAttendance)}</span>
        </p>
        <p class="metric">
          <span class="metric-label">Juvenile attendance</span>
          <span>{formatNumber(activeLibrary.juvenileAttendance)}</span>
        </p>
        <p class="metric">
          <span class="metric-label">Outreach attendance</span>
          <span>{formatNumber(activeLibrary.outreachAttendance)}</span>
        </p>
        <p class="address">
          <span class="metric-label">Address</span>
          <span>{activeLibrary.address}</span>
        </p>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .attendance-cards {
    margin: var(--spacing-lg, 2rem) 0;
  }

  .attendance-title {
    margin: 0;
    font-size: var(--font-size-h2, 2rem);
    line-height: var(--leading-heading, 1.2);
  }

  .borough-title {
    margin: var(--spacing-md, 1rem) 0 var(--spacing-xs, 0.5rem);
    font-size: var(--font-size-h3, 1.5rem);
  }

  .no-data {
    margin: 0 0 var(--spacing-sm, 0.75rem);
    color: var(--color-text-secondary, #555);
    font-style: italic;
  }

  .attendance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--spacing-sm, 0.75rem);
  }

  .metric {
    margin: 0.5rem 0 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .metric-label {
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-secondary, #555);
  }

  .metric-value {
    font-weight: 700;
    font-size: var(--font-size-h3, 1.5rem);
    color: var(--color-accent, #003da5);
  }

  .card-trigger {
    width: 100%;
    text-align: left;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    font: inherit;
    color: inherit;
    display: block;
  }

  .modal-layer {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md, 1rem);
    z-index: 999;
  }

  .modal-backdrop {
    position: absolute;
    inset: 0;
    border: 0;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  .modal-card {
    position: relative;
    width: min(100%, 560px);
    max-height: 90vh;
    overflow: auto;
    background: var(--color-white, #fff);
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    padding: var(--spacing-md, 1rem);
    z-index: 1;
  }

  .modal-title {
    margin: 0;
    font-size: 1.35rem;
  }

  .modal-subtitle {
    margin: 0.25rem 0 0;
    color: var(--color-text-secondary, #555);
  }

  .modal-total {
    margin-top: var(--spacing-sm, 0.75rem);
  }

  .close-button {
    position: absolute;
    top: 0.4rem;
    right: 0.45rem;
    border: 0;
    background: transparent;
    font-size: 1.8rem;
    line-height: 1;
    cursor: pointer;
    color: var(--color-text-secondary, #555);
  }

  .metric-total {
    margin: 0.35rem 0 0;
  }

  .details-content {
    margin-top: var(--spacing-sm, 0.75rem);
    padding-top: var(--spacing-sm, 0.75rem);
    border-top: 1px solid var(--color-border, #ddd);
  }

  .address {
    margin: 0.75rem 0 0;
    display: grid;
    gap: 0.25rem;
    font-size: var(--font-size-sm, 0.875rem);
  }

  :global(.attendance-grid .card-body h4) {
    margin: 0;
    font-size: 1rem;
    line-height: 1.3;
  }
</style>

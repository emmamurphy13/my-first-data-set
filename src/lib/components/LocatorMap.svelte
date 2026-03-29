<!--
@component
LocatorMap.svelte — Static locator map using MapLibre GL JS

Renders a square, non-interactive map centered on a given location,
using an OpenFreeMap-hosted basemap tile service.

USAGE EXAMPLE:
<LocatorMap
  longitude={-73.9914662}
  latitude={40.7555711}
  zoom={13}
  theme="liberty"
  dot={true}
  caption="The Craig Newmark Graduate School of Journalism is in Midtown Manhattan."
  credit="OpenFreeMap / OpenStreetMap contributors"
/>
-->
<script>
  import { onMount } from 'svelte';
  import 'maplibre-gl/dist/maplibre-gl.css';

  /** Maps theme names to OpenFreeMap style URLs */
  const THEME_URLS = {
    liberty: 'https://tiles.openfreemap.org/styles/liberty',
    bright: 'https://tiles.openfreemap.org/styles/bright',
    positron: 'https://tiles.openfreemap.org/styles/positron',
  };

  let {
    longitude = -73.9914662,  // Map center longitude (default: Newmark J-School)
    latitude = 40.7555711,    // Map center latitude
    zoom = 13,               // Initial zoom level (0–22)
    theme = 'liberty',       // Basemap theme: 'liberty' | 'bright' | 'positron'
    dot = false,             // Whether to show a dot marker at the map center
    width = null,            // Optional explicit width in pixels (e.g. 300). Defaults to 100% of parent.
    caption = '',            // Optional caption below the map
    credit = "OpenFreeMap / OpenStreetMap contributors", // Optional credit line
  } = $props();

  const styleUrl = $derived(THEME_URLS[theme] ?? THEME_URLS.liberty);

  let mapContainer;
  let map = $state(null);

  // Tracks the style URL currently applied to the map, to avoid redundant setStyle calls
  let appliedStyleUrl = styleUrl;

  // Build a descriptive label for screen readers from the caption or coordinates
  const ariaLabel = $derived(
    caption
      ? `Map: ${caption}`
      : `Locator map centered at ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
  );

  /** Adds the red dot GeoJSON layer at the map center. */
  function addDotLayer() {
    if (!map || map.getSource('locator-dot')) return;
    map.addSource('locator-dot', {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [longitude, latitude] },
        properties: {},
      },
    });
    map.addLayer({
      id: 'locator-dot',
      type: 'circle',
      source: 'locator-dot',
      paint: {
        'circle-radius': 8,
        'circle-color': '#cc0000',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
      },
    });
  }

  /** Removes the dot GeoJSON layer from the map. */
  function removeDotLayer() {
    if (!map) return;
    if (map.getLayer('locator-dot')) map.removeLayer('locator-dot');
    if (map.getSource('locator-dot')) map.removeSource('locator-dot');
  }

  onMount(() => {
    let mounted = true;

    import('maplibre-gl')
      .then(({ Map }) => {
        if (!mounted) return;
        map = new Map({
          container: mapContainer,
          style: styleUrl,
          center: [longitude, latitude],
          zoom,
          interactive: false,           // Static locator map — no pan or zoom by the user
          attributionControl: credit ? false : { compact: true }, // Hide when credit line is shown below the map
        });
      })
      .catch((err) => {
        console.error('LocatorMap: failed to load maplibre-gl', err);
      });

    return () => {
      mounted = false;
      if (map) map.remove();
      map = null;
    };
  });

  // Reactively update the basemap style when theme changes
  $effect(() => {
    const url = styleUrl;
    if (!map || url === appliedStyleUrl) return;
    appliedStyleUrl = url;
    map.setStyle(url);
    // Re-add the dot once the new style finishes loading
    if (dot) {
      map.once('style.load', addDotLayer);
    }
  });

  // Reactively add or remove the dot marker when the dot prop changes
  $effect(() => {
    const showDot = dot;
    if (!map) return;

    if (map.isStyleLoaded()) {
      if (showDot) addDotLayer();
      else removeDotLayer();
    } else if (showDot) {
      // Style not yet loaded — defer until ready
      map.once('style.load', addDotLayer);
      return () => map?.off('style.load', addDotLayer);
    }
  });
</script>

<figure class="locator-map-figure" style:width={width ? `${width}px` : undefined}>
  <div
    class="locator-map"
    bind:this={mapContainer}
    role="img"
    aria-label={ariaLabel}
    style:width={width ? `${width}px` : undefined}
    style:height={width ? `${width}px` : undefined}
  ></div>
  {#if caption || credit}
    <figcaption class="caption-container">
      {#if caption}
        <span class="caption">{caption}</span>
      {/if}
      {#if credit}
        <span class="credit">{credit}</span>
      {/if}
    </figcaption>
  {/if}
</figure>

<style lang="scss">
  @use '../styles' as *;

  .locator-map-figure {
    margin: var(--spacing-sm) 0;
    padding: 0;
    width: 100%;

    @include tablet {
      margin: var(--spacing-sm) 0;
    }
  }

  .locator-map {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: block;
  }

  .caption-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    padding-top: var(--spacing-xxs);
    margin-top: var(--spacing-xxs);
  }

  .caption {
    font-size: var(--font-size-sm);
    line-height: var(--leading-caption);
    color: var(--color-text);
  }

  .credit {
    font-size: var(--font-size-xs);
    color: var(--color-medium-gray);
  }
</style>

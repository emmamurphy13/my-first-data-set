<!--
@component
LottieGraphic.svelte — Renders a Lottie animation using @lottiefiles/dotlottie-web.
Uses a canvas-based renderer for reliable, high-performance playback.

Trim props let you crop whitespace that is baked into the Lottie composition.
Values are fractions (0–1) of the animation's canvas height:
  trimTop={0.38}   — removes top 38% of canvas height
  trimBottom={0.06} — removes bottom 6% of canvas height
CSS margin percentages are relative to element width, so the conversion is:
  margin = trimFraction × (animationHeight / animationWidth) × 100 %
-->
<script>
  import { onMount } from 'svelte';

  let {
    src = '',
    animationData = null,
    loop = true,
    autoplay = true,
    ariaLabel = 'Animated graphic',
    trimTop = 0,
    trimBottom = 0,
  } = $props();

  // CSS margin-* percentages are relative to the containing block's WIDTH.
  // Canvas height = canvas_width × (animH / animW), so to remove a fraction
  // of canvas HEIGHT we multiply by the aspect ratio.
  const ar = $derived(
    animationData?.h && animationData?.w
      ? animationData.h / animationData.w
      : 0.75   // fallback: 600/800
  );
  const marginTop    = $derived(trimTop    > 0 ? `${-(trimTop    * ar * 100).toFixed(2)}%` : null);
  const marginBottom = $derived(trimBottom > 0 ? `${-(trimBottom * ar * 100).toFixed(2)}%` : null);

  let canvas;
  let player;

  onMount(() => {
    import('@lottiefiles/dotlottie-web').then(({ DotLottie }) => {
      const options = {
        canvas,
        autoplay,
        loop,
        renderConfig: {
          autoResize: true,
        },
      };

      if (animationData) {
        options.data = JSON.stringify(animationData);
      } else if (src) {
        options.src = src;
      }

      player = new DotLottie(options);
    });

    return () => {
      if (player) {
        player.destroy();
      }
    };
  });
</script>

<div
  class="lottie-graphic"
  class:trimmed={trimTop > 0 || trimBottom > 0}
  role="img"
  aria-label={ariaLabel}
>
  <canvas
    bind:this={canvas}
    style:margin-top={marginTop}
    style:margin-bottom={marginBottom}
  ></canvas>
</div>

<style>
  .lottie-graphic {
    width: 100%;
  }

  /* overflow: hidden clips the canvas when trim props are set */
  .lottie-graphic.trimmed {
    overflow: hidden;
  }

  canvas {
    width: 100%;
    height: auto;
    display: block;
  }
</style>

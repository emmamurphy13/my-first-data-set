<!--
  LottieGraphic.stories.svelte

  Stories for the LottieGraphic component.
  LottieGraphic renders a Lottie animation from a remote JSON URL or a
  local animation-data object using lottie-web.

  Props:
  - src: URL to a Lottie JSON animation file
  - animationData: Lottie JSON object (alternative to src)
  - loop: Whether the animation loops (default: true)
  - autoplay: Whether the animation auto-plays (default: true)
  - ariaLabel: Accessible label for the animation container
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LottieGraphic from '$lib/components/LottieGraphic.svelte';

  // Inline Lottie animation data: rotating circle and bar chart
  const CIRCLE_BAR_ANIMATION = {
    v: '5.7.1',
    fr: 30,
    ip: 0,
    op: 60,
    w: 400,
    h: 400,
    assets: [],
    layers: [
      {
        ty: 4,
        nm: 'Circle',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 1, k: [{ t: 0, s: [0], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 60, s: [360] }] },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 1, k: [{ t: 0, s: [80, 80, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 30, s: [120, 120, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 60, s: [80, 80, 100] }] },
        },
        shapes: [
          {
            ty: 'el',
            p: { a: 0, k: [0, 0] },
            s: { a: 0, k: [100, 100] },
          },
          {
            ty: 'st',
            c: { a: 0, k: [0, 0.2, 0.63, 1] },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 6 },
          },
          {
            ty: 'fl',
            c: { a: 1, k: [{ t: 0, s: [0, 0.2, 0.63, 1], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 30, s: [0, 0.4, 0.8, 1], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 60, s: [0, 0.2, 0.63, 1] }] },
            o: { a: 0, k: 80 },
          },
        ],
        ip: 0,
        op: 60,
      },
      {
        ty: 4,
        nm: 'Bar1',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [120, 280, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'rc',
            p: { a: 0, k: [0, 0] },
            s: { a: 1, k: [{ t: 0, s: [40, 60], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } }, { t: 30, s: [40, 140], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } }, { t: 60, s: [40, 60] }] },
            r: { a: 0, k: 4 },
          },
          {
            ty: 'fl',
            c: { a: 0, k: [0, 0.2, 0.63, 1] },
            o: { a: 0, k: 100 },
          },
        ],
        ip: 0,
        op: 60,
      },
      {
        ty: 4,
        nm: 'Bar2',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [200, 280, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'rc',
            p: { a: 0, k: [0, 0] },
            s: { a: 1, k: [{ t: 0, s: [40, 100], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } }, { t: 30, s: [40, 60], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } }, { t: 60, s: [40, 100] }] },
            r: { a: 0, k: 4 },
          },
          {
            ty: 'fl',
            c: { a: 0, k: [0, 0.4, 0.8, 1] },
            o: { a: 0, k: 100 },
          },
        ],
        ip: 0,
        op: 60,
      },
      {
        ty: 4,
        nm: 'Bar3',
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [280, 280, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] },
        },
        shapes: [
          {
            ty: 'rc',
            p: { a: 0, k: [0, 0] },
            s: { a: 1, k: [{ t: 0, s: [40, 80], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } }, { t: 30, s: [40, 160], i: { x: [0.4, 0.4], y: [1, 1] }, o: { x: [0.6, 0.6], y: [0, 0] } }, { t: 60, s: [40, 80] }] },
            r: { a: 0, k: 4 },
          },
          {
            ty: 'fl',
            c: { a: 0, k: [0, 0.13, 0.4, 1] },
            o: { a: 0, k: 100 },
          },
        ],
        ip: 0,
        op: 60,
      },
    ],
  };

  // Inline Lottie animation data: three pulsing dots
  const PULSING_DOTS_ANIMATION = {
    v: '5.7.1',
    fr: 30,
    ip: 0,
    op: 90,
    w: 300,
    h: 300,
    assets: [],
    layers: [
      {
        ty: 4,
        nm: 'Dot1',
        sr: 1,
        ks: {
          o: { a: 1, k: [{ t: 0, s: [30], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 30, s: [100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 60, s: [30] }] },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [80, 150, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 1, k: [{ t: 0, s: [60, 60, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 30, s: [100, 100, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 60, s: [60, 60, 100] }] },
        },
        shapes: [
          { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [40, 40] } },
          { ty: 'fl', c: { a: 0, k: [0, 0.2, 0.63, 1] }, o: { a: 0, k: 100 } },
        ],
        ip: 0,
        op: 90,
      },
      {
        ty: 4,
        nm: 'Dot2',
        sr: 1,
        ks: {
          o: { a: 1, k: [{ t: 10, s: [30], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 40, s: [100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 70, s: [30] }] },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [150, 150, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 1, k: [{ t: 10, s: [60, 60, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 40, s: [100, 100, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 70, s: [60, 60, 100] }] },
        },
        shapes: [
          { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [40, 40] } },
          { ty: 'fl', c: { a: 0, k: [0, 0.4, 0.8, 1] }, o: { a: 0, k: 100 } },
        ],
        ip: 0,
        op: 90,
      },
      {
        ty: 4,
        nm: 'Dot3',
        sr: 1,
        ks: {
          o: { a: 1, k: [{ t: 20, s: [30], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 50, s: [100], i: { x: [0.4], y: [1] }, o: { x: [0.6], y: [0] } }, { t: 80, s: [30] }] },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [220, 150, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 1, k: [{ t: 20, s: [60, 60, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 50, s: [100, 100, 100], i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.6, 0.6, 0.6], y: [0, 0, 0] } }, { t: 80, s: [60, 60, 100] }] },
        },
        shapes: [
          { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [40, 40] } },
          { ty: 'fl', c: { a: 0, k: [0, 0.13, 0.4, 1] }, o: { a: 0, k: 100 } },
        ],
        ip: 0,
        op: 90,
      },
    ],
  };

  const { Story } = defineMeta({
    title: 'Components/LottieGraphic',
    component: LottieGraphic,
    tags: ['autodocs'],
    argTypes: {
      src: {
        control: 'text',
        description: 'URL to a Lottie JSON animation file',
      },
      loop: {
        control: 'boolean',
        description: 'Whether the animation loops continuously',
      },
      autoplay: {
        control: 'boolean',
        description: 'Whether the animation starts automatically',
      },
      ariaLabel: {
        control: 'text',
        description: 'Accessible label describing the animation',
      },
    },
  });
</script>

<!-- Default: looping animated data graphic -->
<Story
  name="Default"
  args={{
    animationData: CIRCLE_BAR_ANIMATION,
    ariaLabel: 'Animated data visualization with pulsing circle and bar chart',
  }}
>
  {#snippet children(args)}
    <LottieGraphic {...args} />
  {/snippet}
</Story>

<!-- Inline Animation Data: a simple looping graphic rendered from inline data -->
<Story
  name="Inline Animation Data"
  args={{
    animationData: PULSING_DOTS_ANIMATION,
    ariaLabel: 'Three animated pulsing dots',
  }}
>
  {#snippet children(args)}
    <LottieGraphic {...args} />
  {/snippet}
</Story>

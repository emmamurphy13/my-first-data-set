<!--
  DatabaseHeader.stories.svelte

  Stories for the DatabaseHeader component.
  DatabaseHeader is a full-width hero banner with a headline, optional byline,
  date, description, children slot for additional content (e.g. search controls),
  and an optional graphic snippet that renders in a right column.

  Props:
  - headline: Primary hero title
  - byline: Attribution line rendered below the headline
  - date: Publication/update date rendered below the byline
  - description: Supporting text
  - bgColor: Background color CSS value (default: var(--color-light-gray))
  - children: Additional content rendered below the text (e.g. search controls)
  - graphic: Snippet rendered in a right column alongside the text
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DatabaseHeader from '$lib/components/DatabaseHeader.svelte';
  import LottieGraphic  from '$lib/components/LottieGraphic.svelte';
  import SearchInput    from '$lib/components/SearchInput.svelte';
  import DropdownInput  from '$lib/components/DropdownInput.svelte';

  import DATA_ANIMATION from './DatabaseHeaderGraphic.json';

  const { Story } = defineMeta({
    title: 'Components/DatabaseHeader',
    component: DatabaseHeader,
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
    argTypes: {
      headline: {
        control: 'text',
        description: 'Primary hero title',
      },
      byline: {
        control: 'text',
        description: 'Attribution line rendered below the headline',
      },
      date: {
        control: 'text',
        description: 'Publication or update date rendered below the byline',
      },
      description: {
        control: 'text',
        description: 'Supporting text below the metadata',
      },
      bgColor: {
        control: 'color',
        description: 'Background color for the hero',
      },
    },
  });
</script>

<!-- Default: light hero with headline and description -->
<Story
  name="Default"
  args={{
    headline: 'Search Our Programs',
    description: 'Explore degree programs, workshops, and fellowship opportunities at the Craig Newmark Graduate School of Journalism.',
    bgColor: 'var(--color-light-gray)',
  }}
/>

<!-- Headline Only: minimal hero with just a headline -->
<Story
  name="Headline Only"
  args={{
    headline: 'Craig Newmark Graduate School of Journalism',
    bgColor: 'var(--color-light-gray)',
  }}
/>

<!-- With Byline and Date: shows attribution metadata below the headline -->
<Story
  name="With Byline and Date"
  args={{
    headline: 'NYC Housing Violations Database',
    byline: 'By the NYCity News Service Data Team',
    date: 'Updated March 2026',
    description: 'Search and filter HPD housing violations across all five boroughs. Data sourced from NYC Open Data and updated weekly.',
    bgColor: 'var(--color-light-gray)',
  }}
/>

<!-- With Graphic: two-column layout with animated data visualization on the right -->
<Story name="With Graphic">
  <DatabaseHeader
    headline="Search CUNY Programs"
    byline="By NYCity News Service"
    date="Updated January 2026"
    description="Explore degree programs, workshops, and fellowship opportunities at the Craig Newmark Graduate School of Journalism."
  >
    {#snippet graphic()}
      <LottieGraphic
        animationData={DATA_ANIMATION}
        ariaLabel="Animated data visualization with bar chart and rotating ring"
        trimTop={0.25}
        trimBottom={0.06}
      />
    {/snippet}
  </DatabaseHeader>
</Story>

<!-- With Graphic and Controls: two-column hero with search inputs in the children slot -->
<Story name="With Graphic and Controls">
  <DatabaseHeader
    headline="Search CUNY Programs"
    byline="By NYCity News Service"
    date="Updated January 2026"
    description="Explore degree programs, workshops, and fellowship opportunities at the Craig Newmark Graduate School of Journalism."
  >
    <div class="demo-controls">
      <SearchInput label="Search Programs" placeholder="Search by program, topic, or keyword…" />
      <DropdownInput
        label="Borough"
        placeholder="All boroughs…"
        options={[
          { value: 'manhattan',     label: 'Manhattan' },
          { value: 'brooklyn',      label: 'Brooklyn' },
          { value: 'queens',        label: 'Queens' },
          { value: 'bronx',         label: 'The Bronx' },
          { value: 'staten-island', label: 'Staten Island' },
        ]}
      />
    </div>
    {#snippet graphic()}
      <LottieGraphic
        animationData={DATA_ANIMATION}
        ariaLabel="Animated data visualization with bar chart and rotating ring"
        trimTop={0.25}
        trimBottom={0.06}
      />
    {/snippet}
  </DatabaseHeader>
</Story>

<style lang="scss">
  @use '$lib/styles' as *;

  .demo-controls {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);

    @include tablet {
      flex-direction: row;
    }
  }
</style>

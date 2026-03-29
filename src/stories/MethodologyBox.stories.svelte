<!--
  MethodologyBox.stories.svelte

  Stories for the MethodologyBox component.
  MethodologyBox displays an explanatory aside at the bottom of a story
  describing the reporting methodology, data sources, or caveats behind
  the journalism.

  Props:
  - title: Heading text (default: "How We Reported This Story")
  - children: Rich HTML content describing the methodology
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import MethodologyBox from '$lib/components/MethodologyBox.svelte';

  const { Story } = defineMeta({
    title: 'Components/MethodologyBox',
    tags: ['autodocs'],
    argTypes: {
      title: {
        control: 'text',
        description: 'Heading text shown at the top of the box',
      },
      children: {
        control: false,
        description: 'Rich HTML content describing the methodology',
      },
    },
  });
</script>

<!-- Default: standard methodology disclosure -->
<Story name="Default">
  <div class="story-container">
    <MethodologyBox>
      <p>
        The data in this story was compiled by student journalists at the Craig Newmark
        Graduate School of Journalism. Records were obtained through Freedom of Information
        Law requests to New York City agencies and verified against public filings.
      </p>
      <p>
        Analysis was performed using Python and the pandas library. Our code and data are
        available on <a href="https://github.com">GitHub</a>.
      </p>
    </MethodologyBox>
  </div>
</Story>

<!-- Custom Title -->
<Story name="Custom Title">
  <div class="story-container">
    <MethodologyBox title="About the Data">
      <p>
        This database was built from public records published by NYC agencies and updated
        weekly. School-level data is aggregated from individual reports filed by city
        officials and verified by our student reporters.
      </p>
    </MethodologyBox>
  </div>
</Story>

<!-- With Links: methodology that references external sources -->
<Story name="With Links">
  <div class="story-container">
    <MethodologyBox title="Sources and Methodology">
      <p>
        Data was obtained from the
        <a href="https://data.cityofnewyork.us">NYC Open Data portal</a> and
        cross-referenced with records from the
        <a href="https://www.dec.ny.gov">NYS Department of Environmental Conservation</a>.
        Population estimates are from the U.S. Census Bureau's
        <a href="https://www.census.gov/programs-surveys/acs">American Community Survey</a>
        (2020–2024 five-year estimates).
      </p>
      <p>
        If you find errors or have questions about this data, please contact us at
        <a href="mailto:data@nycitynewsservice.com">data@nycitynewsservice.com</a>.
      </p>
    </MethodologyBox>
  </div>
</Story>

<style>
  .story-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--spacing-lg) var(--spacing-md);
  }
</style>

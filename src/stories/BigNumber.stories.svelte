<!--
  BigNumber.stories.svelte

  Stories for the BigNumber component.
  BigNumber displays a large statistic with a label — perfect for data dashboards
  in journalism projects.

  Props:
  - number: The value to display prominently (string or number)
  - label: Short description of the metric (string)
  - footnote: Optional small clarifying text below the label (string)
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BigNumber from '$lib/components/BigNumber.svelte';

  const { Story } = defineMeta({
    title: 'Components/BigNumber',
    component: BigNumber,
    tags: ['autodocs'],
    argTypes: {
      number: {
        control: 'text',
        description: 'The prominent value to display (e.g. "42%", "$1.2M", "3,500")',
      },
      label: {
        control: 'text',
        description: 'Short description of the metric displayed below the number',
      },
      footnote: {
        control: 'text',
        description: 'Optional small clarifying text below the label',
      },
    },
  });
</script>

<!-- Default: year stat with a label -->
<Story name="Default" args={{ number: '2006', label: 'Year Founded' }} />

<!-- With Footnote: includes optional clarifying text -->
<Story
  name="With Footnote"
  args={{
    number: '50%',
    label: 'Attend tuition free',
    footnote: 'As of Aug. 2025',
  }}
/>

<!-- Large Number: shows large count formatting -->
<Story name="Large Number" args={{ number: '1,300', label: 'Alumni' }} />

<!-- Weight: whole number example -->
<Story name="Weight" args={{ number: '3', label: 'Media Centers' }} />

<!-- Year: shows date examples -->
<Story
  name="Year"
  args={{
    number: '2006',
    label: 'Year Founded',
    footnote: 'Born during the digital revolution',
  }}
/>

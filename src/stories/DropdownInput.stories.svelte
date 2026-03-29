<!--
  DropdownInput.stories.svelte

  Stories for the DropdownInput component.
  DropdownInput renders a styled <select> dropdown for choosing from a list
  of options.

  Props:
  - options: Array of { value, label } objects
  - value: Currently selected value
  - label: Accessible label displayed above the dropdown
  - placeholder: Default disabled option text
  - onchange: Callback fired when the selection changes
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DropdownInput from '$lib/components/DropdownInput.svelte';

  const { Story } = defineMeta({
    title: 'Components/DropdownInput',
    component: DropdownInput,
    tags: ['autodocs'],
    argTypes: {
      options: {
        control: 'object',
        description: 'Array of { value, label } option objects',
      },
      value: {
        control: 'text',
        description: 'Currently selected value',
      },
      label: {
        control: 'text',
        description: 'Accessible label shown above the dropdown',
      },
      placeholder: {
        control: 'text',
        description: 'Placeholder shown as the default disabled option',
      },
    },
  });
</script>

<!-- Default: dropdown with boroughs -->
<Story
  name="Default"
  args={{
    label: 'Borough',
    placeholder: 'Choose a borough…',
    options: [
      { value: 'manhattan', label: 'Manhattan' },
      { value: 'brooklyn', label: 'Brooklyn' },
      { value: 'queens', label: 'Queens' },
      { value: 'bronx', label: 'The Bronx' },
      { value: 'staten-island', label: 'Staten Island' },
    ],
  }}
/>

<!-- Category Filter: dropdown used as a topic filter -->
<Story
  name="Category Filter"
  args={{
    label: 'Category',
    placeholder: 'All categories…',
    options: [
      { value: 'reporting', label: 'Reporting' },
      { value: 'data', label: 'Data Journalism' },
      { value: 'audio', label: 'Audio' },
      { value: 'video', label: 'Video' },
      { value: 'engagement', label: 'Engagement' },
    ],
  }}
/>

<!-- Year Filter: dropdown for selecting a year -->
<Story
  name="Year Filter"
  args={{
    label: 'Year',
    placeholder: 'Select year…',
    options: [
      { value: '2024', label: '2024' },
      { value: '2023', label: '2023' },
      { value: '2022', label: '2022' },
      { value: '2021', label: '2021' },
      { value: '2020', label: '2020' },
    ],
  }}
/>

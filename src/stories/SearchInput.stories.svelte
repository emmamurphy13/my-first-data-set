<!--
  SearchInput.stories.svelte

  Stories for the SearchInput component.
  SearchInput renders a text input with a magnifying-glass icon, suitable for
  filtering or searching data.

  Props:
  - placeholder: Placeholder text shown when the input is empty
  - value: Current value of the input
  - label: Accessible label displayed above the input
  - oninput: Callback fired when the user types
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SearchInput from '$lib/components/SearchInput.svelte';

  const { Story } = defineMeta({
    title: 'Components/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
    argTypes: {
      placeholder: {
        control: 'text',
        description: 'Placeholder text shown when the field is empty',
      },
      value: {
        control: 'text',
        description: 'Current input value',
      },
      label: {
        control: 'text',
        description: 'Accessible label shown above the input',
      },
    },
  });
</script>

<!-- Default: empty search input -->
<Story
  name="Default"
  args={{ placeholder: 'Search…', label: 'Search' }}
/>

<!-- With Value: pre-filled search input -->
<Story
  name="With Value"
  args={{ placeholder: 'Search…', value: 'Journalism', label: 'Search' }}
/>

<!-- Custom Placeholder: search input with a contextual placeholder -->
<Story
  name="Custom Placeholder"
  args={{ placeholder: 'Search by program, topic, or keyword…', label: 'Find a Program' }}
/>

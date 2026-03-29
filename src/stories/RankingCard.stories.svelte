<!--
  RankingCard.stories.svelte

  Stories for the RankingCard component.
  RankingCard is a horizontal card showing rank, optional image, title, description, and a value.

  Props:
  - rank: Rank number displayed on the left
  - href: Optional URL — if provided, the card becomes a clickable link
  - image: Optional thumbnail image URL
  - imageAlt: Alt text for the thumbnail image
  - title: Card heading text
  - description: Optional supporting text below the title
  - value: Optional metric displayed on the right
  - valueLabel: Optional label beneath the value
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import RankingCard from '$lib/components/RankingCard.svelte';

  const { Story } = defineMeta({
    title: 'Components/RankingCard',
    component: RankingCard,
    tags: ['autodocs'],
    args: {
      rank: 1,
      title: 'M.A. in Journalism',
      description: 'Our flagship program trains reporters, editors, and multimedia journalists.',
      href: '',
      image: '',
      imageAlt: '',
      value: '',
      valueLabel: '',
    },
    argTypes: {
      rank: {
        control: 'number',
        description: 'Rank number displayed on the left.',
      },
      href: {
        control: 'text',
        description: 'Optional URL. If set, the card becomes a clickable link.',
      },
      image: {
        control: 'text',
        description: 'Optional thumbnail image URL.',
      },
      imageAlt: {
        control: 'text',
        description: 'Alt text for the thumbnail image.',
      },
      title: {
        control: 'text',
        description: 'Card heading text.',
      },
      description: {
        control: 'text',
        description: 'Optional supporting text below the title.',
      },
      value: {
        control: 'text',
        description: 'Optional metric displayed on the right.',
      },
      valueLabel: {
        control: 'text',
        description: 'Optional label beneath the value.',
      },
    },
  });
</script>

<!-- Default: rank and title only, controls-driven -->
<Story name="Default" args={{ description: '', value: '', valueLabel: '' }}>
  {#snippet children(args)}
    <div style="max-width: 600px;">
      <RankingCard {...args} />
    </div>
  {/snippet}
</Story>

<!-- With Description: rank, title, and supporting text -->
<Story
  name="With Description"
  args={{ description: 'Our flagship program trains reporters, editors, and multimedia journalists.' }}
>
  {#snippet children(args)}
    <div style="max-width: 600px;">
      <RankingCard {...args} />
    </div>
  {/snippet}
</Story>

<!-- With Link: clicking the card navigates to the URL -->
<Story name="With Link" args={{ href: 'https://www.journalism.cuny.edu/' }}>
  {#snippet children(args)}
    <div style="max-width: 600px;">
      <RankingCard {...args} />
    </div>
  {/snippet}
</Story>

<!-- With Image: card with a thumbnail on the left -->
<Story
  name="With Image"
  args={{
    href: 'https://www.nycitynewsservice.com/',
    image: '/example-photo.gif',
    imageAlt: 'News photo',
    title: 'Become a force for good. Join our next class.',
    description: 'At the Craig Newmark Graduate School of Journalism, change is in our DNA.',
  }}
>
  {#snippet children(args)}
    <div style="max-width: 600px;">
      <RankingCard {...args} />
    </div>
  {/snippet}
</Story>

<!-- With Value: card showing a metric on the right -->
<Story
  name="With Value"
  args={{
    title: 'Politics',
    description: 'City and state government coverage.',
    value: '312',
    valueLabel: 'alumni',
  }}
>
  {#snippet children(args)}
    <div style="max-width: 600px;">
      <RankingCard {...args} />
    </div>
  {/snippet}
</Story>

<!-- Full Featured: all props combined -->
<Story
  name="Full Featured"
  args={{
    href: 'https://www.nycitynewsservice.com/',
    image: '/example-photo.gif',
    imageAlt: 'News photo',
    title: 'Become a force for good. Join our next class.',
    description: 'At the Craig Newmark Graduate School of Journalism, change is in our DNA.',
    value: '312',
    valueLabel: 'alumni',
  }}
>
  {#snippet children(args)}
    <div style="max-width: 600px;">
      <RankingCard {...args} />
    </div>
  {/snippet}
</Story>

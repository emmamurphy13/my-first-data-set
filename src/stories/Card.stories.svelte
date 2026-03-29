<!--
  Card.stories.svelte

  Stories for the Card component.
  Card is a container with optional image, link, and footer actions.

  Props:
  - href: Optional URL — if provided, the card becomes a clickable link
  - image: Optional image URL displayed at the top of the card
  - imageAlt: Alt text for the image
  - children: Main content rendered inside the card body
  - footer: Optional snippet rendered in a footer area with a distinct background
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from '$lib/components/Card.svelte';

  const { Story } = defineMeta({
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
      href: {
        control: 'text',
        description: 'Optional URL. If set, the card becomes a clickable link.',
      },
      image: {
        control: 'text',
        description: 'Optional image URL displayed at the top of the card.',
      },
      imageAlt: {
        control: 'text',
        description: 'Alt text for the card image.',
      },
    },
  });
</script>

<!-- Default: a static card with text content -->
<Story name="Default">
  {#snippet children(args)}
    <Card {...args}>
      <h3>CUNY Journalism Programs</h3>
      <p>Explore degree programs, workshops, and fellowship opportunities at the Craig Newmark Graduate School of Journalism.</p>
    </Card>
  {/snippet}
</Story>

<!-- With Link: clicking the card navigates to the URL -->
<Story name="With Link">
  {#snippet children(args)}
    <Card href="https://www.journalism.cuny.edu/">
      <h3>Visit the J-School</h3>
      <p>Learn more about admissions, financial aid, and campus life at the Craig Newmark Graduate School of Journalism.</p>
    </Card>
  {/snippet}
</Story>

<!-- With Image: card with a top image -->
<Story name="With Image">
  {#snippet children(args)}
    <div style="max-width: 400px;">
      <Card image="/example-photo.gif" imageAlt="The Craig Newmark Graduate School of Journalism">
        <h3>Our Campus</h3>
        <p>219 West 40th Street in Midtown Manhattan, in the heart of the media capital of the world.</p>
      </Card>
    </div>
  {/snippet}
</Story>

<!-- With Footer: card with action buttons in a footer area -->
<Story name="With Footer">
  {#snippet children(args)}
    <div style="max-width: 400px;">
      <Card>
        <h3>Spring 2026 Applications</h3>
        <p>Applications are now open for the M.A. in Journalism and M.A. in Engagement Journalism programs.</p>
        {#snippet footer()}
          <a href="https://www.journalism.cuny.edu/admissions/">Apply Now</a>
          &nbsp;&middot;&nbsp;
          <a href="https://www.journalism.cuny.edu/admissions/financial-aid/">Financial Aid</a>
        {/snippet}
      </Card>
    </div>
  {/snippet}
</Story>

<!-- Full Featured: image, body, footer, and link combined -->
<Story name="Full Featured">
  {#snippet children(args)}
    <div style="max-width: 400px;">
      <Card
        href="https://www.journalism.cuny.edu/"
        image="/example-photo.gif"
        imageAlt="The Craig Newmark Graduate School of Journalism"
      >
        <h3>Craig Newmark Graduate School of Journalism</h3>
        <p>Become a force for good. Join our next class at one of the nation's leading journalism schools.</p>
        {#snippet footer()}
          <span>Learn more &rarr;</span>
        {/snippet}
      </Card>
    </div>
  {/snippet}
</Story>

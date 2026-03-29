<!--
  CardGrid.stories.svelte

  Composition story: a standard article layout with search and dropdown
  inputs that filter a responsive grid of Card components.
-->
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SiteHeader     from '$lib/components/SiteHeader.svelte';
  import SiteFooter     from '$lib/components/SiteFooter.svelte';
  import ArticleHeader  from '$lib/components/ArticleHeader.svelte';
  import ArticleBody    from '$lib/components/ArticleBody.svelte';
  import SearchInput    from '$lib/components/SearchInput.svelte';
  import DropdownInput  from '$lib/components/DropdownInput.svelte';
  import Card           from '$lib/components/Card.svelte';
  import MethodologyBox from '$lib/components/MethodologyBox.svelte';

  const PROGRAMS = [
    { title: 'M.A. in Journalism', category: 'graduate', description: 'Our flagship program trains reporters, editors, and multimedia journalists for the modern newsroom.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'M.A. in Engagement Journalism', category: 'graduate', description: 'A unique program focused on building trust and deepening connections with communities.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'Bilingual Journalism', category: 'graduate', description: 'For students fluent in English and Spanish who want to serve multilingual communities.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'Social Journalism', category: 'graduate', description: 'Learn to practice journalism that listens to and engages with communities.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'News Innovation & Leadership', category: 'professional', description: 'Evening and weekend workshops for mid-career journalists looking to lead.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'Investigative Reporting', category: 'professional', description: 'Intensive training in watchdog journalism, data analysis, and public records.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'Data Journalism', category: 'professional', description: 'Workshops on coding, data visualization, and computational reporting.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'Audio & Podcasting', category: 'professional', description: 'Hands-on production training for radio, podcasts, and audio storytelling.', href: 'https://www.journalism.cuny.edu/' },
    { title: 'Entrepreneurial Journalism', category: 'professional', description: 'Build a sustainable media business from idea to launch.', href: 'https://www.journalism.cuny.edu/' },
  ];

  const CATEGORIES = [
    { value: 'graduate', label: 'Graduate Programs' },
    { value: 'professional', label: 'Professional Education' },
  ];

  const { Story } = defineMeta({
    title: 'Compositions/Card Grid',
    tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
  });
</script>

<script>
  let searchQuery = $state('');
  let selectedCategory = $state('');

  let filtered = $derived(
    PROGRAMS.filter((p) => {
      const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  );
</script>

<Story name="Default">
  <SiteHeader />

  <div class="container">
    <ArticleHeader
      headline="Explore CUNY Journalism Programs"
      byline="NYCity News Service"
      pubDate="2026-01-31"
    />

    <ArticleBody>
      <p>
        The Craig Newmark Graduate School of Journalism offers graduate degrees,
        professional workshops, and fellowships. Use the filters below to find
        a program that fits your goals.
      </p>
    </ArticleBody>

    <div class="filters">
      <SearchInput
        label="Search Programs"
        placeholder="Search by name or keyword…"
        value={searchQuery}
        oninput={(e) => searchQuery = e.target.value}
      />
      <DropdownInput
        label="Category"
        placeholder="All categories…"
        options={CATEGORIES}
        value={selectedCategory}
        onchange={(e) => selectedCategory = e.target.value}
      />
    </div>

    <p class="result-count">{filtered.length} program{filtered.length !== 1 ? 's' : ''} found</p>

    <div class="card-grid">
      {#each filtered as program (program.title)}
        <Card href={program.href}>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
          {#snippet footer()}
            <span class="category-tag">{program.category === 'graduate' ? 'Graduate' : 'Professional'}</span>
          {/snippet}
        </Card>
      {/each}
    </div>

    {#if filtered.length === 0}
      <p class="no-results">No programs match your search. Try a different keyword or category.</p>
    {/if}

    <MethodologyBox title="About This Directory">
      <p>
        Program information was compiled from public materials published by the
        Craig Newmark Graduate School of Journalism at CUNY.
      </p>
    </MethodologyBox>
  </div>

  <SiteFooter />
</Story>

<style lang="scss">
  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--spacing-lg, 2rem) var(--spacing-md);
  }

  .filters {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm, 0.75rem);
    margin: var(--spacing-md, 1rem) 0;
  }

  @media (min-width: 600px) {
    .filters {
      flex-direction: row;
    }
  }

  .result-count {
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-medium-gray, #666);
    margin-bottom: var(--spacing-sm, 0.75rem);
  }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md, 1rem);
    margin-bottom: var(--spacing-lg, 2rem);
  }

  @media (min-width: 600px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .card-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .category-tag {
    font-size: var(--font-size-sm, 0.875rem);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--color-accent, #003da5);
  }

  .no-results {
    text-align: center;
    padding: var(--spacing-xl, 3rem) 0;
    color: var(--color-medium-gray, #666);
    font-style: italic;
  }
</style>

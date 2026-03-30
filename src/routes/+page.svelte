<!--
@component
This is your page!
-->
<script>
  import LibraryAttendanceCards from '$lib/components/LibraryAttendanceCards.svelte';

  let { data } = $props();
</script>

<!-- This sets the page title in the browser tab -->
<svelte:head>
  <title>{data.pageTitle} | NYCity News Service</title>
  <meta name="description" content="Top four libraries by program attendance in each borough from NYPL branch services data." />
</svelte:head>

<!-- Your page content goes here -->
<div class="container">
  <LibraryAttendanceCards
    title={data.pageTitle}
    groups={data.attendanceGroups}
  />

</div>

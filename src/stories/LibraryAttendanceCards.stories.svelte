<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LibraryAttendanceCards from '$lib/components/LibraryAttendanceCards.svelte';

  const sampleGroups = [
    {
      borough: 'Bronx',
      libraries: [
        {
          location: 'Bronx Library Center',
          attendance: 40723,
          adultAttendance: 15179,
          youngAdultAttendance: 4324,
          juvenileAttendance: 13069,
          outreachAttendance: 8151,
          address: '310 East Kingsbridge Road, Bronx, NY 10458',
        },
        {
          location: 'Parkchester',
          attendance: 25531,
          adultAttendance: 1705,
          youngAdultAttendance: 4200,
          juvenileAttendance: 16301,
          outreachAttendance: 3325,
          address: '1985 Westchester Avenue, Bronx, NY 10462',
        },
        {
          location: 'Soundview',
          attendance: 15743,
          adultAttendance: 2247,
          youngAdultAttendance: 2314,
          juvenileAttendance: 9849,
          outreachAttendance: 1333,
          address: '660 Soundview Avenue, Bronx, NY 10473',
        },
        {
          location: 'Mott Haven',
          attendance: 14737,
          adultAttendance: 955,
          youngAdultAttendance: 2044,
          juvenileAttendance: 8952,
          outreachAttendance: 2786,
          address: '321 East 140th Street, Bronx, NY 10454',
        },
      ],
    },
    {
      borough: 'Manhattan',
      libraries: [
        { location: 'Seward Park', attendance: 20368 },
        { location: 'Ottendorfer', attendance: 17285 },
        { location: 'Inwood', attendance: 14987 },
        { location: 'Fort Washington', attendance: 14832 },
      ],
    },
    {
      borough: 'Staten Island',
      libraries: [
        { location: 'Dongan Hills', attendance: 15368 },
        { location: 'New Dorp', attendance: 12074 },
        { location: 'St. George Library Center', attendance: 11566 },
        { location: 'Great Kills', attendance: 9906 },
      ],
    },
  ];

  const { Story } = defineMeta({
    title: 'Components/LibraryAttendanceCards',
    component: LibraryAttendanceCards,
    tags: ['autodocs'],
    args: {
      title: 'Top 4 Libraries by Attendance in Each Borough',
      groups: sampleGroups,
    },
  });
</script>

<Story name="Default" />

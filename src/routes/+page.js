// Page settings
// These values are passed to the layout to control what appears on the page.
export async function load({ fetch }) {
  const response = await fetch('/film-permits.csv');
  const csvText = await response.text();

  const rows = csvText.trim().split(/\r?\n/);
  const dataRows = rows.slice(1);

  const byBorough = new Map();
  const excludedBoroughs = new Set(['CENTRAL LIBRARY UNITS', 'Other', 'System']);

  const branchAddresses = {
    'Bronx  Library Center': '310 East Kingsbridge Road, Bronx, NY 10458',
    Parkchester: '1985 Westchester Avenue, Bronx, NY 10462',
    Soundview: '660 Soundview Avenue, Bronx, NY 10473',
    'Mott Haven': '321 East 140th Street, Bronx, NY 10454',
    'Seward Park': '192 East Broadway, New York, NY 10002',
    Ottendorfer: '135 2nd Avenue, New York, NY 10003',
    Inwood: '4790 Broadway, New York, NY 10034',
    'Fort Washington': '535 West 179th Street, New York, NY 10033',
    'Dongan Hills': '1617 Richmond Road, Staten Island, NY 10304',
    'New Dorp': '309 New Dorp Lane, Staten Island, NY 10306',
    'St. George Library Center': '5 Central Avenue, Staten Island, NY 10301',
    'Great Kills': '56 Giffords Lane, Staten Island, NY 10308',
  };

  for (const row of dataRows) {
    const cols = row.split(',');
    if (cols.length < 13) continue;

    const borough = cols[0]?.trim();
    const branch = cols[2]?.trim();
    const adultAttendance = Number(cols[4]?.trim());
    const youngAdultAttendance = Number(cols[6]?.trim());
    const juvenileAttendance = Number(cols[8]?.trim());
    const outreachAttendance = Number(cols[10]?.trim());
    const totalAttendance = Number(cols[12]?.trim());

    if (!borough || excludedBoroughs.has(borough)) continue;
    if (!branch || /subtotal|total/i.test(branch)) continue;
    if (!Number.isFinite(totalAttendance) || totalAttendance <= 0) continue;

    if (!byBorough.has(borough)) byBorough.set(borough, []);
    byBorough.get(borough).push({
      location: branch,
      attendance: totalAttendance,
      adultAttendance,
      youngAdultAttendance,
      juvenileAttendance,
      outreachAttendance,
      address: branchAddresses[branch] || 'Address not available in this dataset',
    });
  }

  const boroughOrder = ['Bronx', 'Manhattan', 'Staten Island', 'Brooklyn', 'Queens'];

  const groups = boroughOrder.map((borough) => {
    const libraries = byBorough.get(borough) || [];

    return {
      borough,
      libraries: libraries
        .sort((a, b) => b.attendance - a.attendance)
        .slice(0, 4),
    };
  });

  return {
    // Set to false to hide the NYCity News Service header
    showHeader: true,
    // Set to false to hide the site footer
    showFooter: true,
    pageTitle: 'Top 4 Libraries by Attendance in Each Borough',
    attendanceGroups: groups,
  };
}

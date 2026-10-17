// All the wedding details live here. Edit this file to personalise the site.

export const WEDDING = {
  partner1: "Amara",
  partner2: "Ethan",

  // ISO date-time of the ceremony, with the venue's UTC offset
  dateISO: "2027-06-19T16:00:00-04:00",
  dateLabel: "June 19th, 2027",
  city: "New York City",

  venue: {
    name: "Teatro Grand Ballroom",
    address: ["123 Grand Avenue", "New York, NY 10001"],
    mapsUrl: "https://maps.google.com/?q=123+Grand+Avenue+New+York",
  },

  rsvpBy: "May 1st, 2027",

  // Photos for the gallery: put files in /public/photos and list them here
  photos: [] as { src: string; alt: string }[],

  // Background music: put an mp3 in /public and set its path, e.g. "/music.mp3"
  music: "" as string,
}

export const INITIALS = `${WEDDING.partner1[0]} & ${WEDDING.partner2[0]}`
export const COUPLE = `${WEDDING.partner1} & ${WEDDING.partner2}`

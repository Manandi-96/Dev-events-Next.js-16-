export type EventCardData = {
  title: string
  image: string
  slug: string
  location: string
  date: string
  time: string
}

export const events: EventCardData[] = [
  {
    title: 'React Summit 2026',
    image: '/images/event1.png',
    slug: 'react-summit-2026',
    location: 'Amsterdam, Netherlands',
    date: 'May 14-15, 2026',
    time: '09:00 - 18:00'
  },
  {
    title: 'NodeConf EU 2026',
    image: '/images/event2.png',
    slug: 'nodeconf-eu-2026',
    location: 'Brighton, United Kingdom',
    date: 'June 2-3, 2026',
    time: '09:30 - 17:30'
  },
  {
    title: "Google Cloud Next '26",
    image: '/images/event3.png',
    slug: 'google-cloud-next-2026',
    location: 'San Francisco, CA',
    date: 'July 20-22, 2026',
    time: '08:00 - 19:00'
  },
  {
    title: 'HackZurich 2026',
    image: '/images/event4.png',
    slug: 'hackzurich-2026',
    location: 'Zurich, Switzerland',
    date: 'September 5-7, 2026',
    time: '18:00 - 08:00'
  },
  {
    title: 'DevOpsDays NYC 2026',
    image: '/images/event5.png',
    slug: 'devopsdays-nyc-2026',
    location: 'New York, NY',
    date: 'October 14-15, 2026',
    time: '09:00 - 17:00'
  }
]

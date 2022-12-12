export type TEvent = {
  id: string;
  start_time_t: string | number;
  end_time_t: string | number;
  name: string;
  place_name: string;
  place_link: string;
};

export const getEvents: () => TEvent[] = () => [
  {
    id: crypto.randomUUID(),
    start_time_t: new Date(2022, 11, 10, 18, 0).getTime(),
    end_time_t: new Date(2022, 11, 10, 21, 0).getTime(),
    name: 'England - France',
    place_name: 'Railway',
    place_link: 'https://goo.gl/maps/frhFruwsw6gLMBYU6',
  },
  {
    id: crypto.randomUUID(),
    start_time_t: new Date(2022, 11, 11, 12, 0).getTime(),
    end_time_t: new Date(2022, 11, 11, 14, 0).getTime(),
    name: 'CSGO',
    place_name: 'SideQuest',
    place_link: 'https://goo.gl/maps/gtwQQ4TPcCg1Now4A',
  },
  {
    id: crypto.randomUUID(),
    start_time_t: new Date(2022, 11, 14, 19, 0).getTime(),
    end_time_t: new Date(2022, 11, 14, 22, 0).getTime(),
    name: 'Halffinals',
    place_name: 'Camden Beer Hall',
    place_link: 'https://goo.gl/maps/CfUCd557QAigpEGz9',
  },
  {
    id: crypto.randomUUID(),
    start_time_t: new Date(2022, 11, 18, 15, 0).getTime(),
    end_time_t: new Date(2022, 11, 18, 18, 0).getTime(),
    name: 'WC Final',
    place_name: 'Lowlander',
    place_link: 'https://goo.gl/maps/GQDcB5JR2CU7Tp6u8',
  },
];

export type CEvent = {
  id: string;
  eventName: string;
  startDate: Date;
  endDate: Date;
  isPast: boolean;
  place: {
    name: string;
    link: string;
  };
};

const makeEvents = (events: TEvent[]): CEvent[] => {
  const today = new Date();
  return events.map((sEvent) => ({
    id: sEvent.id,
    startDate: new Date(sEvent.start_time_t),
    endDate: new Date(sEvent.end_time_t),
    isPast: sEvent.end_time_t < today.getTime(),
    place: {
      name: sEvent.place_name,
      link: sEvent.place_link,
    },
    eventName: sEvent.name,
  }));
};

export const clientDates = makeEvents(getEvents());

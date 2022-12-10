export type TEvent = {
  id: string;
  startTime: Date;
  endTime: Date;
  name: string;
  place: {
    name: string;
    link: string;
  };
};

export const data: TEvent[] = [
  {
    id: crypto.randomUUID(),
    startTime: new Date('12-10-2022 18:00'),
    endTime: new Date('12-10-2022 21:00'),
    name: 'England - France',
    place: {
      name: 'Railway',
      link: 'https://goo.gl/maps/frhFruwsw6gLMBYU6',
    },
  },
  {
    id: crypto.randomUUID(),
    startTime: new Date('12-11-2022 12:00'),
    endTime: new Date('12-11-2022 14:00'),
    name: 'CSGO',
    place: {
      name: 'SideQuest',
      link: 'https://goo.gl/maps/gtwQQ4TPcCg1Now4A',
    },
  },
  {
    id: crypto.randomUUID(),
    startTime: new Date('12-14-2022 19:00'),
    endTime: new Date('12-14-2022 22:00'),
    name: 'Halffinals',
    place: {
      name: 'Camden Beer Hall',
      link: 'https://goo.gl/maps/CfUCd557QAigpEGz9',
    },
  },
  {
    id: crypto.randomUUID(),
    startTime: new Date('12-18-2022 15:00'),
    endTime: new Date('12-18-2022 18:00'),
    name: 'WC Final',
    place: {
      name: 'Lowlander',
      link: 'hhttps://goo.gl/maps/GQDcB5JR2CU7Tp6u8',
    },
  },
];

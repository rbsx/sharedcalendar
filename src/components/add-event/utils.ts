import { FormFields } from './types';

const makeRandomId = () => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);

  return array[0] % 100000000;
};

export type EventFormDataType = {
  name?: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  placeName?: string;
  placeLink?: string;
};

export type ApiFormDataType = {
  id: number;
  start_time: number;
  end_time?: number;
  name: string;
  place_name?: string;
  place_link?: string;
};
export type ApiRequestType = ApiFormDataType | { error: string };

export const formatFormToRequest = ({
  name = 'New event',
  eventDate,
  startTime,
  endTime,
  placeName,
  placeLink,
}: EventFormDataType): ApiRequestType => {
  if (!eventDate || !startTime) return { error: 'Fill required fields' };
  const startDate = new Date(eventDate + ' ' + startTime);
  const endDate = endTime ? new Date(eventDate + ' ' + endTime) : undefined;

  return {
    id: makeRandomId(),
    start_time: startDate.getTime(),
    end_time: endDate?.getTime(),
    name,
    place_name: placeName || placeLink,
    place_link: placeLink,
  };
};

import { useEffect, useState } from 'react';
import { fetchEvents } from '../../api/supabase';

export const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const waitForEvents = async () => {
      const fetchedEvents = await fetchEvents();

      console.log({ fetchedEvents });
    };

    waitForEvents();
  }, []);

  return null;
};

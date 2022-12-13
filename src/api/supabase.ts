import { createClient } from '@supabase/supabase-js';
import { formatFormToRequest } from '../components/add-event/utils';

const SUPABASE_URL = 'https://sieloosqrczlvzvhhbzl.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpZWxvb3NxcmN6bHZ6dmhoYnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2NzE0MTksImV4cCI6MTk4NjI0NzQxOX0.qgc6ffjn1CLrnylu4H3BoPmETUxin509Y6Owjg-SHnM';
const DBNAME = 'events';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const fetchEvents = async () => {
  const { data, error } = await supabase.from(DBNAME).select();

  return data;
};

export const addEvent = async (
  event: ReturnType<typeof formatFormToRequest>
) => {
  const response = await supabase.from(DBNAME).insert(event);
  return response;
};

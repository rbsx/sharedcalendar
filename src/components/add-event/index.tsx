import { FormEvent, useState } from 'react';
import { addEvent } from '../../api/supabase';
import Modal from '../modal';
import { FormFields } from './types';
import {
  ApiFormDataType,
  EventFormDataType,
  formatFormToRequest,
} from './utils';

export const AddEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleModalClose = () => {};
  const handleSubmit = async (submitEvent: FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    const fd = new FormData(submitEvent.target);
    const formData = {} as EventFormDataType;

    for (let row of fd) {
      const [key, value] = row;

      // @ts-ignore
      formData[key] = value;
    }

    console.table(formData);

    const result = await addEvent(formatFormToRequest(formData));
    console.log(result.error);

    submitEvent.preventDefault();
  };

  if (true) return null;

  return (
    <>
      <button>New Event</button>

      {isModalOpen ? (
        <Modal onClose={handleModalClose}>
          <form onSubmit={handleSubmit}>
            Name: <input name={FormFields.name} type="text" /> <br />
            Event date: <input name={FormFields.eventDate} type="date" /> <br />
            Start time: <input name={FormFields.startTime} type="time" /> <br />
            End time: <input name={FormFields.endTime} type="time" /> <br />
            Place name: <input name={FormFields.placeName} type="text" /> <br />
            Place link: <input name={FormFields.placeLink} type="text" /> <br />
            <button type="submit">Add event</button>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

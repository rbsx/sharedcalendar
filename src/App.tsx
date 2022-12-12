import './App.css';
import { clientDates, CEvent, getEvents, TEvent } from './data/calendar';

enum days {
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

const weekdayMap = [
  days.Sunday,
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  days.Saturday,
];

const monthMap = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const makeMinutes = (minutes: number) => {
  return minutes < 10 ? `0${minutes}` : minutes;
};

const getDaysDiff = (eventBefore: CEvent, eventAfter?: CEvent) => {
  let calculateTimeFrome = eventBefore.endDate;
  let fromNow = false;

  if (!eventAfter) return null;
  if (eventAfter.isPast && eventBefore.isPast) return null;
  if (eventBefore.isPast && !eventAfter.isPast) {
    calculateTimeFrome = new Date();
    fromNow = true;
  }

  // @ts-ignore
  const numdiff = eventAfter.startTime - calculateTimeFrome;
  const numdiffHours = Math.round(numdiff / 1000 / 60 / 60);
  const hoursWODays = numdiffHours % 24;

  if (numdiffHours > 23) {
    return `${Math.round(numdiffHours / 24)} days ${
      hoursWODays > 0 ? hoursWODays + ' hours' : ''
    } ${fromNow ? 'from now' : ''}`;
  }

  return `${hoursWODays} hours ${fromNow ? 'from now' : ''}`;
};

export default function App() {
  const data = clientDates;
  return (
    <div className="app">
      {data.map((event, index) => {
        const weekday = weekdayMap[event.startDate.getDay()];
        const daydiffs = getDaysDiff(event, data[index + 1]);
        const isWeekend = weekday in days ? true : false;
        return (
          <>
            <section className={`date ${event.isPast ? 'past' : ''}`}>
              <header>
                {monthMap[event.startDate.getMonth()]}
                &nbsp;
                {event.startDate.getDate()}
                &nbsp;
                <span className={`${isWeekend ? 'weekend' : ''}`}>
                  {weekday}
                </span>
              </header>
              <main>
                <span className="time">
                  {event.startDate.getHours()}:
                  {makeMinutes(event.startDate.getMinutes())} -&nbsp;
                  {event.endDate.getHours()}:
                  {makeMinutes(event.endDate.getMinutes())}
                </span>
                <span className="name">{event.eventName}</span>
                <span className="place">
                  <a href={event.place.link}>{event.place.name}</a>
                </span>
              </main>
            </section>
            {daydiffs ? (
              <div className="next">Next event in {daydiffs}</div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}

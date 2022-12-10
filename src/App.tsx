import './App.css';
import { data, TEvent } from './data/calendar';

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

const getDaysDiff = (eventBefore: TEvent, eventAfter?: TEvent) => {
  if (!eventAfter) return null;

  // @ts-ignore
  const numdiff = eventAfter.startTime - eventBefore.startTime;
  const numdiffHours = numdiff / 1000 / 60 / 60;
  const hoursWODays = numdiffHours % 24;

  if (numdiffHours > 23) {
    return `${Math.round(numdiffHours / 24)} days ${
      hoursWODays > 0 ? hoursWODays + ' hours' : ''
    }`;
  }

  return `${hoursWODays} hours`;
};

export default function App() {
  return (
    <div className="app">
      {data.map((event, index) => {
        const weekday = weekdayMap[event.startTime.getDay()];
        const daydiffs = getDaysDiff(event, data[index + 1]);
        const isWeekend = weekday in days ? true : false;
        return (
          <>
            <section className="date">
              <header>
                {monthMap[event.startTime.getMonth()]}
                &nbsp;
                {event.startTime.getDate()}
                &nbsp;
                <span className={`${isWeekend ? 'weekend' : ''}`}>
                  {weekday}
                </span>
              </header>
              <main>
                <span className="time">
                  {event.startTime.getHours()}:
                  {makeMinutes(event.startTime.getMinutes())} -&nbsp;
                  {event.endTime.getHours()}:
                  {makeMinutes(event.endTime.getMinutes())}
                </span>
                <span className="name">{event.name}</span>
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

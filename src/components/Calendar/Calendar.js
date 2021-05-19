import calendarStyles from "./Calendar.module.scss";
import CalendarItem from "../CalendarItem/CalendarItem";

function Calendar() {
  return (
    <section className={calendarStyles.container}>
      <CalendarItem isActive />
      <CalendarItem />
      <CalendarItem />
      <CalendarItem />
      <CalendarItem />
      <CalendarItem />
    </section>
  );
}

export default Calendar;

import CalendarItem from "../CalendarItem/CalendarItem";
import calendarStyles from "./Calendar.module.scss";

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

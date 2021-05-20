import Tags from "../Tags/Tags";
import CalendarItem from "../CalendarItem/CalendarItem";
import calendarStyles from "./Calendar.module.scss";
import appStyles from "../App/App.module.scss";

function Calendar() {
  return (
    <>
      <section className={appStyles.section}>
        <h1 className={appStyles.mainTitle}>Календарь</h1>
        <h1 className="test">Календарь</h1>
        <Tags />
      </section>
      <section className={calendarStyles.container}>
        <CalendarItem isActive />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
        <CalendarItem />
      </section>
    </>
  );
}

export default Calendar;

import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import calendarItemStyles from "./CalendarItem.module.scss";

function CalendarItem({ isActive }) {
  return (
    <article
      className={cn(calendarItemStyles.calendar, {
        [calendarItemStyles.calendar_selected]: isActive,
      })}
    >
      <div className={calendarItemStyles.caption}>
        <div className={calendarItemStyles.info}>
          <p className={calendarItemStyles.type}>Волонтёры + дети</p>
          <p className={calendarItemStyles.weekday}>Декабрь / понедельник</p>
        </div>
        <div className={calendarItemStyles.about}>
          <h2 className={calendarItemStyles.title}>
            Субботний meet up: учимся проходить интевью
          </h2>
          <p className={calendarItemStyles.date}>05</p>
        </div>
      </div>
      <div className={calendarItemStyles.meetup}>
        <ul className={calendarItemStyles.infoList}>
          <li className={calendarItemStyles.infoItem}>
            <p className={calendarItemStyles.time}>12:00–14:00</p>
          </li>
          <li className={calendarItemStyles.infoItem}>
            <p className={calendarItemStyles.place}>
              Садовническая наб., д. 77 стр. 1 (офис компании Ernst&amp;Young)
            </p>
          </li>
          <li className={calendarItemStyles.infoItem}>
            <p className={calendarItemStyles.contact}>
              Александра, +7 926 356-78-90
            </p>
          </li>
        </ul>
        <div className={calendarItemStyles.submit}>
          <Button
            className={
              (calendarItemStyles.button,
              isActive && calendarItemStyles.button_selected)
            }
            isLight
            type="button"
            onClick={() => console.log("123")}
          >
            Отменить запись
          </Button>
          <p className={calendarItemStyles.placeLeft}></p>
          <Button
            className={calendarItemStyles.buttonDots}
            isLight
            type="button"
            onClick={() => console.log("123")}
          >
            &#8226;&#8226;&#8226;
          </Button>
        </div>
      </div>
    </article>
  );
}

CalendarItem.propTypes = {
  isActive: PropTypes.bool,
};

export default CalendarItem;

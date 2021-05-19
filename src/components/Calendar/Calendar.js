import calendarStyles from "./Calendar.module.scss";
import pageStyles from "../App/App.module.scss";

function Calendar() {
  return (
    <section className={calendarStyles.container}>
      <article className="calendar calendar_selected">
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры + дети</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title">
              Субботний meet up: учимся проходить интевью
            </h2>
            <p className="calendar__date">05</p>
          </div>
        </div>
        <div className="calendar__meetup">
          <ul className="calendar__info-list">
            <li className="calendar__info-item">
              <p className="calendar__time">12:00–14:00</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__place">
                Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)
              </p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__contact">Александра, +7 926 356-78-90</p>
            </li>
          </ul>
          <div className="calendar__submit">
            <button
              className="button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up"
              type="button"
            >
              Отменить запись
            </button>
            <p className="calendar__place-left"></p>
            <button
              className="button calendar__button-dots button_theme_light"
              type="button"
            >
              &#8226;&#8226;&#8226;
            </button>
          </div>
        </div>
      </article>

      <article className="calendar">
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title">
              Ресурсная группа «Вовлечение в волонтёрство»
            </h2>
            <p className="calendar__date">16</p>
          </div>
        </div>
        <div className="calendar__meetup">
          <ul className="calendar__info-list">
            <li className="calendar__info-item">
              <p className="calendar__time">12:00–14:00</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__place">
                {`Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)`}
              </p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__contact">Александра, +7 926 356-78-90</p>
            </li>
          </ul>
          <div className="calendar__submit">
            <button
              className="button button_theme_light"
              type="button"
              disabled
            >
              Записаться
            </button>
            <p className="calendar__place-left">Запись закрыта</p>
            <button
              className="button calendar__button-dots button_theme_light"
              type="button"
            >
              &#8226;&#8226;&#8226;
            </button>
          </div>
        </div>
      </article>

      <article className="calendar">
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры + дети</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title">
              Занятие с выпускниками: как составить резюме
            </h2>
            <p className="calendar__date">20</p>
          </div>
        </div>
        <div className="calendar__meetup">
          <ul className="calendar__info-list">
            <li className="calendar__info-item">
              <p className="calendar__time">12:00–14:00</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__place">
                {`Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)`}
              </p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__contact">Александра, +7 926 356-78-90</p>
            </li>
          </ul>
          <div className="calendar__submit">
            <button
              className="button button_theme_light calendar__button_action_sign-up"
              type="button"
            >
              Записаться
            </button>
            <p className="calendar__place-left">Осталось 5 мест</p>
            <button
              className="button calendar__button-dots button_theme_light"
              type="button"
            >
              &#8226;&#8226;&#8226;
            </button>
          </div>
        </div>
      </article>

      <article className="calendar">
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры + дети</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title">
              Субботний meet up: учимся проходить интевью
            </h2>
            <p className="calendar__date">23</p>
          </div>
        </div>
        <div className="calendar__meetup">
          <ul className="calendar__info-list">
            <li className="calendar__info-item">
              <p className="calendar__time">12:00–14:00</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__place">
                {`Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)`}
              </p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__contact">Александра, +7 926 356-78-90</p>
            </li>
          </ul>
          <div className="calendar__submit">
            <button
              className="button button_theme_light calendar__button_action_sign-up"
              type="button"
            >
              Записаться
            </button>
            <p className="calendar__place-left">Осталось 5 мест</p>
            <button
              className="button calendar__button-dots button_theme_light"
              type="button"
            >
              &#8226;&#8226;&#8226;
            </button>
          </div>
        </div>
      </article>

      <article className="calendar">
        <div className="calendar__caption">
          <div className="calendar__info">
            <p className="calendar__type">Волонтёры + дети</p>
            <p className="calendar__weekday">Декабрь / понедельник</p>
          </div>
          <div className="calendar__about">
            <h2 className="section-title calendar__title">
              Субботний meet up: учимся проходить интевью
            </h2>
            <p className="calendar__date">28</p>
          </div>
        </div>
        <div className="calendar__meetup">
          <ul className="calendar__info-list">
            <li className="calendar__info-item">
              <p className="calendar__time">12:00–14:00</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__place">{`Садовническая наб., д. 77 стр. 1 (офис компании Ernst&Young)`}</p>
            </li>
            <li className="calendar__info-item">
              <p className="calendar__contact">Александра, +7 926 356-78-90</p>
            </li>
          </ul>
          <div className="calendar__submit">
            <button
              className="button button_theme_light calendar__button_action_sign-up"
              type="button"
            >
              Записаться
            </button>
            <p className="calendar__place-left">Осталось 5 мест</p>
            <button
              className="button calendar__button-dots button_theme_light"
              type="button"
            >
              &#8226;&#8226;&#8226;
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Calendar;
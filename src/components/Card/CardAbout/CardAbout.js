import React from "react";
import cn from "classnames";
import CardAboutStyles from "./CardAbout.module.scss";
import CardStyles from "../Card.module.scss";
import SectionTitleStyles from "../../App/App.module.scss";
import logo from "../../../images/svg/calendar_logo.svg";

function CardAbout() {
  return (
    <article className={cn(CardStyles.card, CardAboutStyles.cardAbout, CardStyles.cardColorGreen)}>
      <div className={CardAboutStyles.cardAboutUpperElement}>
        <a>
          <img
            src={logo}
            alt="Логотип Старшие Братья Старшие Сестры России"
            className={CardAboutStyles.cardAboutLogo}
          />
        </a>
      </div>
      <div className={CardAboutStyles.cardAboutContent}>
        <h2
          className={cn(
            SectionTitleStyles.sectionTitle,
            CardAboutStyles.cardAboutText
          )}
        >
          Наставники.про – цифоровая информационная платформа огрганизации
          «Старшие Братья Старшие Сестры», созданная для поддержки наставников
          программы.
        </h2>
      </div>
    </article>
  );
}

export default CardAbout;

import React from "react";
import cn from "classnames";
import CardPreviewAboutStyles from "./CardPreviewAbout.module.scss";
import CardStyles from "../Card.module.scss";
import SectionTitleStyles from "../../App/App.module.scss";
import logo from "../../../images/svg/calendar_logo.svg";

function CardPreviewAbout() {
  return (
    <article className={cn(CardStyles.card, CardPreviewAboutStyles.cardAbout)}>
      <div className={CardPreviewAboutStyles.cardAboutUpperElement}>
        <a>
          <img
            src={logo}
            alt="Логотип Старшие Братья Старшие Сестры России"
            className={CardPreviewAboutStyles.cardAboutLogo}
          />
        </a>
      </div>
      <div className={CardPreviewAboutStyles.cardAboutContent}>
        <h2
          className={cn(
            SectionTitleStyles.sectionTitle,
            CardPreviewAboutStyles.cardAboutText
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

export default CardPreviewAbout;

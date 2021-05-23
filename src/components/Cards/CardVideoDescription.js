import React from "react";
import cn from "classnames";
import CardStyles from "./styles/Card.module.scss";
import SectionTitleStyles from "../App/App.module.scss";

function CardVideoDescription() {
  return (
    <article className={cn(CardStyles.card, CardStyles.cardColorYellow, CardStyles.ContentVideoDescription)}>
      <div className={CardStyles.cardTitleWrap}>
        <a className={CardStyles.cardLinkWrap}>
          <h2 className={cn(SectionTitleStyles.sectionTitle, CardStyles.cardTitle)}>Эфир с выпускником нашей программы</h2>
        </a>
        <p className={cn(CardStyles.cardTitleCaption, CardStyles.caption)}>Иван Рустаев, выпускник программы</p>
      </div>
      <a className={cn(CardStyles.link, CardStyles.cardLink, CardStyles.linkActionOpenVideo)}>смотреть видео</a>
    </article>
  )
}

export default CardVideoDescription;

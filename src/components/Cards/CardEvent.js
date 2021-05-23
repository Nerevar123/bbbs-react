import React from "react";
import cn from "classnames";
import CardStyles from "./styles/Card.module.scss";
import SectionTitleStyles from "../App/App.module.scss";
import imgEvents from "../../images/where-to-go/img-xl.jpg";

function CardEvent() {
  return (
    <article className={cn(CardStyles.card, CardStyles.cardTypeMain, CardStyles.cardColorYellow)}>
      <p className={cn(CardStyles.cardRubric, CardStyles.cardRubricEvents)}>Выбор наставника</p>
      <div className={CardStyles.cardTitleWrap}>
        <a className={CardStyles.cardLinkWrap}>
          <h2 className={cn(SectionTitleStyles.sectionTitle, CardStyles.cardTitle)}>
            Сплав на байдарках в 2 строки
          </h2>
        </a>
        <p className={cn(CardStyles.cardTitleCaption, CardStyles.caption)}>
          Усадьба Архангельское в две строки
        </p>
      </div>
      <a className={cn(CardStyles.cardLinkWrap, CardStyles.cardLinkWrapEvents)}>
        <img src={imgEvents} alt="Сплав на байдарках" className={CardStyles.cardImg} />
      </a>
      <a className={cn(CardStyles.link, CardStyles.cardLink)}>
        Перейти на сайт
      </a>
    </article>
  )
}

export default CardEvent;

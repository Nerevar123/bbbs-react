import React from "react";
import cn from "classnames";
import CardFilm from "../Cards/CardFilm";
import CardContainerStyles from "./Section.module.scss";
import SectionStyles from "../App/App.module.scss";

function FilmsSection() {
  const film1 = {
    title: "Жутко громко и запредельно близко",
    info: "Василий Сигарев, Борисов-Мусотов (Россия), 2009 год",
  }
  const film2 = {
    title: "Жизнь Кабачка",
    info: "Клод Баррас, мультфильм, Швейцария, Франция, 2016",
  }
  const film3 = {
    title: "Волчок",
    info: "Василий Сигарев, Россия, 2009 год",
  }
  return (
    <section className={cn(CardContainerStyles.cardsGrid, CardContainerStyles.cardsGridContentSmallCards, SectionStyles.pageSection, SectionStyles.mainSection)}>
      <CardFilm filmTitle={film1.title} filmInfo={film1.info}/>
      <CardFilm filmTitle={film2.title} filmInfo={film2.info}/>
      <CardFilm filmTitle={film3.title} filmInfo={film3.info}/>
      <CardFilm filmTitle={film1.title} filmInfo={film1.info}/>
    </section>
  )
}

export default FilmsSection;

import React from "react";
import cn from "classnames";
import CardFilm from "../Cards/CardFilm";
import CardContainerStyles from "./Section.module.scss";
import SectionStyles from "../App/App.module.scss";

function FilmsSection() {
  return (
    <section className={cn(CardContainerStyles.cardsGrid, CardContainerStyles.cardsGridContentSmallCards, SectionStyles.pageSection, SectionStyles.mainSection)}>
      <CardFilm />
      <CardFilm />
      <CardFilm />
      <CardFilm />
    </section>
  )
}

export default FilmsSection;

import React from "react";
import cn from "classnames";
import CardEvent from "../Cards/CardEvent";
import CardAnnotation from "../Cards/CardAnnotation";
import CardContainerStyles from "./Section.module.scss";
import SectionStyles from "../App/App.module.scss";

function EventsSection() {
  return (
    <section className={cn(CardContainerStyles.container, CardContainerStyles.containerTypeMainArticle, SectionStyles.mainSection, SectionStyles.pageSection)}>
      <CardEvent />
      <CardAnnotation />
    </section>
  )
}

export default EventsSection;

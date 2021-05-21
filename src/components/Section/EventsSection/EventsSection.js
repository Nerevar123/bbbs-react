import React from "react";
import cn from "classnames";
import CardEvents from "../../Card/CardEvents/CardEvents";
import CardAnnotation from "../../Card/CardAnnotation/CardAnnotation";
import CardContainerStyles from "../CardContainer.module.scss";
import SectionStyles from "../../App/App.module.scss";

function EventsSection() {
  return (
    <section className={cn(CardContainerStyles.container, CardContainerStyles.containerTypeMainArticle, SectionStyles.mainSection, SectionStyles.pageSection)}>
      <CardEvents />
      <CardAnnotation />
    </section>
  )
}

export default EventsSection;

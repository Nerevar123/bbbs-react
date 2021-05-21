import React from "react";
import cn from "classnames";
import CardFriendship from "../../Card/CardFriendship/CardFriendship";
import CardAbout from "../../Card/CardAbout/CardAbout";
import CardContainerStyles from "../CardContainer.module.scss";
import SectionStyles from "../../App/App.module.scss";

function LeadSection() {
  return (
    <section className={cn(CardContainerStyles.container, CardContainerStyles.containerTypeIdentical, SectionStyles.pageSection)}>
      <CardAbout />
      <CardFriendship />
    </section>
  )
}

export default LeadSection;

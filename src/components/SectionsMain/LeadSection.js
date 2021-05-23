import React from "react";
import cn from "classnames";
import CardFriendship from "../Cards/CardFriendship";
import CardAbout from "../Cards/CardAbout";
import CardContainerStyles from "./Section.module.scss";
import SectionStyles from "../App/App.module.scss";

function LeadSection() {
  return (
    <section className={cn(CardContainerStyles.container, CardContainerStyles.containerTypeIdentical, SectionStyles.pageSection)}>
      <CardAbout />
      <CardFriendship />
    </section>
  )
}

export default LeadSection;

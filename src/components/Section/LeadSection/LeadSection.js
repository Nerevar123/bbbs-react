import React from "react";
import cn from "classnames";
import CardPreviewCases from "../../Card/CardPreviewCases/CardPreviewCases";
import CardPreviewAbout from "../../Card/CardPreviewAbout/CardPreviewAbout";
import CardContainerStyles from "../CardContainer.module.scss";

function LeadSection() {
  return (
    <section className={cn(CardContainerStyles.container, CardContainerStyles.container_type_identical)}>
      <CardPreviewAbout />
      <CardPreviewCases />
    </section>
  )
}

export default LeadSection;

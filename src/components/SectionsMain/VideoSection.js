import React from "react";
import cn from "classnames";
import CardVideo from "../Cards/CardVideo";
import CardVideoDescription from "../Cards/CardVideoDescription";
import CardContainerStyles from "./Section.module.scss";
import SectionStyles from "../App/App.module.scss";

function VideoSection() {
  return (
    <section className={cn(SectionStyles.mainSection, SectionStyles.pageSection, CardContainerStyles.container, CardContainerStyles.containerTypeMainVideo)}>
      <CardVideoDescription />
      <CardVideo />
    </section>
  )
}

export default VideoSection;

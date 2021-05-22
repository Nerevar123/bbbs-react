import React from "react";
import LeadSection from "../SectionsMain/LeadSection";
import EventsSection from "../SectionsMain/EventsSection";
import ArticleSection from "../SectionsMain/ArticleSection";
import FilmsSection from "../SectionsMain/FilmsSection";

function Main() {
  return (
    <>
      <LeadSection />
      <EventsSection />
      <ArticleSection isBlue={true} />
      <FilmsSection />
      <ArticleSection isGreen={true} />
    </>
  );
}

export default Main;

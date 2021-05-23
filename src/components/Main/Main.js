import React from "react";
import LeadSection from "../SectionsMain/LeadSection";
import EventsSection from "../SectionsMain/EventsSection";
import ArticleSection from "../SectionsMain/ArticleSection";
import FilmsSection from "../SectionsMain/FilmsSection";
import VideoSection from "../SectionsMain/VideoSection";
import SocialAndQuestionsSection from "../SectionsMain/SocialAndQuestionsSection";

function Main() {
  const contentArticle1="Развитие детей-сирот отличается от развития детей, живущих в семьях. Все этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных особенностей.";
  const contentArticle2="У таких детей возникает ощущение отверженности. Оно приводит к напряженности и  недоверию к людям и, как итог, к реальному неприятию себя и окружающих.";

  return (
    <>
      <LeadSection />
      <EventsSection />
      <ArticleSection isBlue={true} content={contentArticle1}/>
      <FilmsSection />
      <VideoSection />
      <SocialAndQuestionsSection />
      <ArticleSection isGreen={true} content={contentArticle2}/>
    </>
  );
}

export default Main;

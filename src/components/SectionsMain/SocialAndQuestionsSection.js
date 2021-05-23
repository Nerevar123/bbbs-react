import React from "react";
import cn from "classnames";
import CardQuestion from "../Cards/CardQuestion";
import CardSocial from "../Cards/CardSocial";
import CardContainerStyles from "./Section.module.scss";
import SectionStyles from "../App/App.module.scss";

function SocialAndQuestionsSection() {
  const contentQuestion1 = "Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?";
  const contentQuestion2 = "Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в программе?";
  const contentQuestion3 = "Что делать, если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?";

  return (
    <section className={cn(SectionStyles.mainSection, SectionStyles.pageSection, CardContainerStyles.container, CardContainerStyles.containerTypeIframe)}>
      <section className={cn(CardContainerStyles.container, CardContainerStyles.containerTypeIframe)}>
        <CardSocial />
      </section>
      <section>
        <CardQuestion content={contentQuestion1}/>
        <CardQuestion content={contentQuestion2} />
        <CardQuestion content={contentQuestion3}/>
      </section>
    </section>
  );
}

export default SocialAndQuestionsSection;

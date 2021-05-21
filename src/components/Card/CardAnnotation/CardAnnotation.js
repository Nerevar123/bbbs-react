import React from "react";
import cn from "classnames";
import CardStyles from "../Card.module.scss";
import CardAnnotationStyles from "./CardAnnotation.module.scss";
import SectionTitleStyles from "../../App/App.module.scss";

function CardAnnotation() {
  return (
    <article className={cn(CardStyles.card, CardStyles.cardContentAnnotation, CardStyles.cardTypeMain)}>
      <div className={CardStyles.cardContent}>
        <p className={cn(CardStyles.caption, CardStyles.cardAnnotationCaption)}>Девочка, 10 лет. Активный</p>
        <div className={cn(CardStyles.cardAnnotation, CardStyles.cardAnnotationPositionMainCard)}>
          <p className={cn(CardStyles.paragraph, CardAnnotationStyles.cardParagraph)}>Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
          научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не
          понимать друг друга, потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как
          ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы
          будете не понимать друг друга, потом понимать чуть лучше и,</p>
          <p className={cn(CardStyles.paragraph, CardAnnotationStyles.cardParagraph)}>Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
          научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не
          по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а
          задавать бесконечное количество вопросов, жизнь меняется.</p>
        </div>
      </div>
    </article>
  );
}

export default CardAnnotation;

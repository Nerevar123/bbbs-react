import React from "react";
import cn from "classnames";
import CardStyles from "../Card.module.scss";
import CardPreviewCasesStyles from "./CardPreviewCases.module.scss";
import SectionTitleStyles from "../../App/App.module.scss";
import imgFriendship from "../../../images/stories/DG7B0561(1).jpg";

function CardPreviewCases() {
  return (
    <article
      className={cn(CardStyles.card, CardPreviewCasesStyles.cardContentCases)}
    >
      <img
        className={CardPreviewCasesStyles.cardContentCasesImg}
        src={imgFriendship}
        alt="История Марины и Алины"
      />
      <a
        className={cn(
          CardPreviewCasesStyles.cardContentCasesLink,
          SectionTitleStyles.sectionTitle
        )}
      >
        История Марины и Алины
      </a>
    </article>
  );
}

export default CardPreviewCases;

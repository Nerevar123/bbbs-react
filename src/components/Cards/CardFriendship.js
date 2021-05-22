import React from "react";
import cn from "classnames";
import CardStyles from "./styles/Card.module.scss";
import SectionTitleStyles from "../App/App.module.scss";
import imgFriendship from "../../images/stories/AlinaAndMarina.jpg";

function CardFriendship() {
  return (
    <article
      className={cn(CardStyles.card, CardStyles.cardContentFriendship)}
    >
      <img
        className={CardStyles.cardFriendshipImg}
        src={imgFriendship}
        alt="История Марины и Алины"
      />
      <a
        className={cn(
          CardStyles.cardFriendshipLink,
          SectionTitleStyles.sectionTitle
        )}
      >
        История Марины и Алины
      </a>
    </article>
  );
}

export default CardFriendship;

import React from "react";
import cn from "classnames";
import CardStyles from "../Card.module.scss";
import CardFriendshipStyles from "./CardFriendship.module.scss";
import SectionTitleStyles from "../../App/App.module.scss";
import imgFriendship from "../../../images/stories/DG7B0561(1).jpg";

function CardFriendship() {
  return (
    <article
      className={cn(CardStyles.card, CardFriendshipStyles.cardContentFriendship)}
    >
      <img
        className={CardFriendshipStyles.cardContentFriendshipImg}
        src={imgFriendship}
        alt="История Марины и Алины"
      />
      <a
        className={cn(
          CardFriendshipStyles.cardContentFriendshipLink,
          SectionTitleStyles.sectionTitle
        )}
      >
        История Марины и Алины
      </a>
    </article>
  );
}

export default CardFriendship;

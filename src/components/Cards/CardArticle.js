import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CardStyles from "./styles/Card.module.scss";

function CardArticle(props) {
  return (
    <article
      className={cn(
        CardStyles.card,
        CardStyles.cardContentArticle,
        { [CardStyles.cardColorBlue]: props.isBlue },
        { [CardStyles.cardColorGreen]: props.isGreen }
        )
      }
    >
      <a className={CardStyles.cardLinkWrap}>
        <h3 className={cn(CardStyles.cardQuote, CardStyles.chapterTitle)}>
          {props.content}
        </h3>
      </a>
      <a className={cn(CardStyles.link, CardStyles.cardLink)}>Читать статью</a>
    </article>
  );
}

CardArticle.propTypes = {
  isBlue: PropTypes.bool,
  isGreen: PropTypes.bool,
  content: PropTypes.string,
};

export default CardArticle;

import React from "react";
import cn from "classnames";
import CardStyles from "./styles/Card.module.scss";

function CardSocial() {
  return (
    <article className={cn(
      CardStyles.card,
      CardStyles.cardColorBlue,
      CardStyles.cardContentMedia)}>
      <iframe
        className={CardStyles.cardIframe}
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        allowFullScreen="true"
        allow="clipboard-write; encrypted-media; picture-in-picture; web-share" />
    </article>
  )
}

export default CardSocial;

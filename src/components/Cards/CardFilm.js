import React from "react";
import cn from "classnames";
import CardStyles from "./styles/Card.module.scss";
import CardPaginationStyles from "./styles/CardPagination.module.scss";
import VideoStyles from "./styles/Video.module.scss";
import SectionTitleStyles from "../App/App.module.scss";
import imgFilm from "../../images/video/video-prev.png";

function CardFilm() {
  return (
    <article
      className={cn(
        CardStyles.card,
        CardStyles.cardContentVideo,
        CardPaginationStyles.cardPaginationPageMain
      )}
    >
      <div className={VideoStyles.video}>
        <a className={CardStyles.cardLinkWrap}>
          <img src={imgFilm} alt="Превью видео" className={VideoStyles.videoImg} />
            <ul className={VideoStyles.videoRubricList}>
              <li>
                <p className={cn(CardStyles.cardRubric, VideoStyles.videoRubric)}>рубрика</p>
              </li>
              <li>
                <p className={cn(CardStyles.cardRubric, VideoStyles.videoRubric)}>рубрика</p>
              </li>
            </ul>
        </a>
      </div>
      <div className={CardStyles.cardVideoInfo}>
        <div className={CardStyles.cardTitleWrap}>
          <h2 className={cn(SectionTitleStyles.sectionTitle, CardStyles.cardTitle)}>Жутко громко и запредельно близко</h2>
          <p className={cn(CardStyles.caption, CardStyles.cardTitleCaption)}>Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
        </div>
        <a className={cn(CardStyles.link, CardStyles.cardLink, CardStyles.linkActionOpenVideo)}>смотреть трейлер</a>
      </div>
    </article>
  )
}

export default CardFilm;

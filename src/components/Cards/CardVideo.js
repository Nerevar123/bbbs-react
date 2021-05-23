import React from "react";
import cn from "classnames";
import CardStyles from "./styles/Card.module.scss";
import VideoStyles from "./styles/Video.module.scss";
import videoImg from "../../images/video/video-main.jpg";

function CardVideo() {
  return (
    <article className={cn(CardStyles.card, CardStyles.cardColorYellow, CardStyles.cardContentVideo, VideoStyles.video)}>
      <a className={CardStyles.cardLinkWrap}>
        <img
          src={videoImg}
          alt="Превью видео"
          className={cn(
            VideoStyles.videoImg,
            VideoStyles.videoImgPositionMainVideo)
          }
        />
      </a>
    </article>
  );
}

export default CardVideo;

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import CardArticle from "../Cards/CardArticle";
import SectionStyles from "../App/App.module.scss";

function ArticleSection(props) {
  return (
    <section
      className={cn(SectionStyles.mainSection, SectionStyles.pageSection)}
    >
      <CardArticle isBlue={props.isBlue} isGreen={props.isGreen} content={props.content}/>
    </section>
  );
}

ArticleSection.propTypes = {
  isBlue: PropTypes.bool,
  isGreen: PropTypes.bool,
  content: PropTypes.string,
};

export default ArticleSection;

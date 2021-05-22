import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CardArticle from "../Cards/CardArticle";
import SectionStyles from "../App/App.module.scss";

function ArticleSection(props) {
  return (
    <section
      className={cn(SectionStyles.mainSection, SectionStyles.pageSection)}
    >
      <CardArticle isBlue={props.isBlue} isGreen={props.isGreen} />
    </section>
  );
}

ArticleSection.propTypes = {
  isBlue: PropTypes.bool,
  isGreen: PropTypes.bool,
};

export default ArticleSection;

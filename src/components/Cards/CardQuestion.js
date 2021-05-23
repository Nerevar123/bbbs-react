import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import CardStyles from "./styles/Card.module.scss";
import CardQuestionStyles from "./styles/Question.module.scss";
import SectionTitleStyles from "../App/App.module.scss";

function CardQuestion(props) {

  return (
    <article className={cn(CardQuestionStyles.question, CardQuestionStyles.mainQuestionsItem)}>
      <a className={CardQuestionStyles.mainQuestionsLink}>
        <h2 className={cn(SectionTitleStyles.sectionTitle, CardQuestionStyles.questionTitle, CardQuestionStyles.mainQuestionsTitle)}>
          {props.content}
        </h2>
      </a>
      <p
        className={cn(
          CardStyles.cardRubric,
          CardQuestionStyles.questionRubric,
          CardQuestionStyles.mainQuestionsRubric)
        }
      >
        рубрика
      </p>
    </article>
  );
}

CardQuestion.propTypes = {
  content: PropTypes.string,
};

export default CardQuestion;

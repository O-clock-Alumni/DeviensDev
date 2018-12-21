/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Answer from 'src/components/Initiation/Practice/Quiz/Answer';
import * as S from './style';

/*
 * Component
 */
const Question = ({
  answers,
  explanation,
  isDisabled,
  hasGood,
  label,
  ...answerProps
}) => {
  // Props
  const { questionId } = answerProps;

  /*
   * View
   */
  return (
    <S.Container>
      {/* Header @ Question */}
      <S.Header>
        {!isDisabled && <S.Icon hasGood={hasGood} />}

        <S.Question>
          {questionId}. {label}
        </S.Question>
      </S.Header>

      {/* Answers */}
      <S.Answers>
        {answers.map((answer, index) => (
          <Answer key={answer} index={index} answer={answer} {...answerProps} />
        ))}
      </S.Answers>

      {/* Explanation */}
      {!isDisabled && (
        <S.Explanation hasGood={hasGood}>{explanation}</S.Explanation>
      )}
    </S.Container>
  );
};

/*
 * PropTypes
 */
Question.propTypes = {
  answers: PropTypes.array.isRequired,
  explanation: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,

  // eslint-disable-next-line react/require-default-props
  hasGood: PropTypes.bool,
};

/*
 * Export
 */
export default Question;

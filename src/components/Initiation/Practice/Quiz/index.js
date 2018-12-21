/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

/*
 * Local Import
 */
import Result from 'src/components/Initiation/Practice/Quiz/Result';
import Pagination from 'src/components/Initiation/Pagination';
import Question from 'src/components/Initiation/Practice/Quiz/Question';

import { normalizeData } from './utils';
import * as S from './style';

/*
 * Component
 */
export default class Quiz extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  /*
   * State
   */
  state = {
    ids: [],
    questions: {},
    responses: {},
    currentQuestion: 0,
    isDisabled: true,
    quizFinished: false,
  };

  /*
   * LifeCycles
   */
  componentDidMount() {
    const { quizzes } = this.props.data.markdownRemark.frontmatter;
    const data = normalizeData(quizzes);

    // Set data
    this.init(data);
  }

  /*
   * Actions
   */
  init = data => {
    this.setState(data);
  };

  /*
   * Handlers
   */
  onChange = evt => {
    const { name, value } = evt.target;

    this.setState(prevState => ({
      responses: {
        ...prevState.responses,
        [parseInt(name, 10)]: [parseInt(value, 10)],
      },
    }));
  };

  onSubmit = evt => {
    evt.preventDefault();

    const questions = {};
    this.state.ids.forEach(quizId => {
      // We're looking if we have the expected answer
      const equal = isEqual(
        this.state.questions[quizId].result,
        this.state.responses[quizId],
      );

      // Assign the new `questions` — with the result
      questions[quizId] = {
        ...this.state.questions[quizId],
        hasGood: equal,
      };
    });

    // How much we have good answers ?
    const goodAnswersLen = Object.values(questions).filter(
      quaestio => quaestio.hasGood,
    ).length;

    // Set in State
    this.setState({
      questions,
      goodAnswersLen,
      isDisabled: false,
    });
  };

  onSubmitNext = evt => {
    evt.preventDefault();
    const { ids } = this.state;
    const lastQuestion = Object.keys(ids).length;
    const { currentQuestion, isDisabled } = this.state;

    // if an answer has been given
    if (!isDisabled) {
      // if it's not the last question, go to the next one
      if (currentQuestion < lastQuestion - 1) {
        this.setState({
          currentQuestion: currentQuestion + 1,
          isDisabled: true,
        });
      }
      // else show the result
      else {
        this.setState({
          quizFinished: true,
        });
      }
    }
  };

  /*
   * Render
   */
  render() {
    // Props
    const {
      currentQuestion,
      isDisabled,
      goodAnswersLen,
      quizFinished,
      ids,
      questions,
      responses,
    } = this.state;
    const { language } = this.props.data.markdownRemark.frontmatter;
    const totalQuestions = Object.keys(ids).length;
    const buttonText =
      currentQuestion < totalQuestions - 1 ? 'suivant' : 'terminer';

    return (
      <S.Container>
        <S.Parcours>Parcours d’initiation {language}</S.Parcours>
        {/* @TODO : revoir la pagination dynamique */}
        <Pagination id={7} language={language} />

        <S.Header>
          <S.Title>Quiz {language}</S.Title>
          <S.Description>
            Testons tes connaissances avec ce Quiz sur le langage {language} !
          </S.Description>
        </S.Header>

        {quizFinished ? (
          /* Result */
          <Result
            language={language}
            score={goodAnswersLen}
            totalQuestions={totalQuestions}
          />
        ) : (
          /* Form */
          <S.Form onSubmit={this.onSubmit}>
            {/* Questions */}
            {ids.length > 0 && (
              <Question
                questionId={ids[currentQuestion]}
                handleChange={this.onChange}
                values={responses[ids[currentQuestion]]}
                isDisabled={isDisabled}
                {...questions[ids[currentQuestion]]}
              />
            )}

            {/* Buttons */}
            <S.ContainerButton>
              <S.Button>Valider</S.Button>
              <S.Button onClick={this.onSubmitNext} isDisabled={isDisabled}>
                {buttonText}
              </S.Button>
            </S.ContainerButton>
          </S.Form>
        )}
      </S.Container>
    );
  }
}

/* eslint-disable max-len */

/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import * as S from './style';

/*
 * Component
 */
const Result = ({ language, score, totalQuestions }) => {
  // Props
  const otherLanguage = language === 'HTML' ? 'css' : 'html';

  /*
   * View
   */
  if (score < 4) {
    return (
      <S.Container>
        <S.Score>
          Ton score : {score}/{totalQuestions}
        </S.Score>
        <S.Title>
          Bravo, tu as fait tes premiers pas avec le {language} !
        </S.Title>
        <S.Text>
          Tu as obtenu{' '}
          <S.Bold>
            {score}/{totalQuestions}
          </S.Bold>{' '}
          bonnes réponses. Bon OK, c’est pas un score tonitruant mais c’ est
          normal, c’est le métier qui rentre. Ça mérite encore un peu d
          ’entrainement sur le {language} avant de passer à la suite. On
          continue ?
          <S.ButtonList>
            <S.Button to={`/initiation/${language.toLowerCase()}`}>
              Refaire le {language}
            </S.Button>
          </S.ButtonList>
        </S.Text>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.Score>
        Ton score : {score}/{totalQuestions}
      </S.Score>
      <S.Title>Pas mal du tout !</S.Title>
      <S.Text>
        Tu as obtenu{' '}
        <S.Bold>
          {score}/{totalQuestions}
        </S.Bold>{' '}
        bonnes réponses, bravo. Les bases du {language} n’ont plus beaucoup de
        secrets pour toi. Tu es peut-être fait pour devenir dev ! On continue ?
        <S.ButtonList>
          <S.Button to={`/initiation/${language.toLowerCase()}`}>
            Refaire le {language}
          </S.Button>
          <S.Button to={`/initiation/${otherLanguage.toLowerCase()}`}>
            On passe au {otherLanguage}
          </S.Button>
        </S.ButtonList>
      </S.Text>
    </S.Container>
  );
};

/*
 * PropTypes
 */
Result.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Result;

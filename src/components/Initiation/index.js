/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import Cards from './Cards';
import * as S from './style';

/*
 * Component
 */
const Initiation = () => (
  <React.Fragment>
    {/* Intro  */}
    <S.IntroContainer>
      <S.Title>Les mains dans le code</S.Title>

      <S.TextIntro>
        <S.Bold>
          Voici nos parcours d’initiations destinés à vous faire découvrir le
          code.
        </S.Bold>
        Rien de bien méchant ni de complexe mais assez pour vous faire une idée
        de ce qu’est le développement et des mécaniques de logique qu’impliquent
        chaque technologie.
      </S.TextIntro>
    </S.IntroContainer>

    {/* Courses • Cards */}
    <Cards />

    {/* Outro */}
    <S.OutroContainer>
      <S.WantMore>
        Vous avez mis les mains dans le code et ça vous a plu ?
      </S.WantMore>
      <S.Text>
        Il est peut-être temps de vous former pour devenir développeur, vous ne
        pensez pas ?
      </S.Text>
      <S.Button to="/formations">Les formations</S.Button>
    </S.OutroContainer>
  </React.Fragment>
);

/*
 * Export
 */
export default Initiation;

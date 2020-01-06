/*
 * Package Import
 */
import React from 'react';

/*
 * Local import
 */
import Crane from './Crane';
import * as S from './style';

/*
 * Component
 */
const Formations = () => (
  <React.Fragment>
    <S.IntroContainer>
      <S.Title>Formations</S.Title>
    </S.IntroContainer>

    <S.ConstructionContainer>
      <Crane />
      <S.Text>
        <S.Bold>
          Vous retrouverez ici prochainement un listing de formations permettant
          de vous former.
        </S.Bold>{' '}
        Si vous êtes un organisme de formation et que vous souhaitez figurer sur
        la liste, contactez-nous !
      </S.Text>

      <S.Button href="mailto:contact@deviens.dev">Nous contacter</S.Button>
    </S.ConstructionContainer>
  </React.Fragment>
);

/*
 * Export
 */
export default Formations;

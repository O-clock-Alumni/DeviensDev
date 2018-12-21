/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import * as S from './style';

/*
 * Component
 */
const Intro = () => (
  <S.Container>
    <S.WantMore>DeviensDev est un projet open-source</S.WantMore>
    <S.Text>
      Si vous voulez contribuer au projet, la porte vous est grande ouverte.
      Enfin la porte… Le dépôt GitHub. Bref,&nbsp;vous&nbsp;avez&nbsp;compris !
    </S.Text>
    <S.Button to="/contribuer">Contribuer</S.Button>
  </S.Container>
);

/*
 * Export
 */
export default Intro;

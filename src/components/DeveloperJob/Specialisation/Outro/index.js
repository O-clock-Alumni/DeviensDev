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
const Outro = () => (
  <S.Container>
    <S.WantMore>
      <S.BlockAtSmall>Nous avons débroussaillé les principales </S.BlockAtSmall>
      <S.BlockAtSmall>
        spécialités du monde de la conception de projets web.
      </S.BlockAtSmall>
    </S.WantMore>
    <S.Text>
      Intéressons-nous maintenant aux compétences à acquérir pour devenir
      développeur web !
    </S.Text>

    <S.Button to="/metier-developpeur/competences-et-prerequis">
      Compétences
      <br />
      et prérequis
    </S.Button>
  </S.Container>
);

/*
 * Export
 */
export default Outro;

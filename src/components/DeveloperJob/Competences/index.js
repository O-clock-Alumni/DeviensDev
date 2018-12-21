/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import Crane from 'src/components/Formations/Crane';
import * as S from './style';

/*
 * Component
 */
const Competences = () => (
  <React.Fragment>
    <S.IntroContainer>
      <S.Title>Compétences</S.Title>
    </S.IntroContainer>

    <S.ConstructionContainer>
      <Crane />
      <S.Text>
        <S.Bold>
          Vous retrouverez bientôt ici tous les compétences et pré-requis pour
          devenir développeur web.
        </S.Bold>{' '}
        Si vous êtes inspirés sur le sujet, n&apos;hésitez pas à contribuer à
        cette future page !
      </S.Text>

      <S.Button href="mailto:contact@deviensdev.com">Nous contacter</S.Button>
    </S.ConstructionContainer>
  </React.Fragment>
);

/*
 * Export
 */
export default Competences;

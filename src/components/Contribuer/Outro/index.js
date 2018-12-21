/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { URL_REPO_GITHUB } from 'src/data';
import * as S from './style';

/*
 * Component
 */
const Outro = () => (
  <S.Container>
    <S.WantMore>Si tu ne sais pas comment t’y prendre…</S.WantMore>
    <S.Text>
      N’hésite pas à ouvrir une issue sur le dépôt GitHub, et notre équipe
      viendra te filer un coup de main.
    </S.Text>
    <S.Button href={URL_REPO_GITHUB}>voir le dépôt</S.Button>
  </S.Container>
);

/*
 * Export
 */
export default Outro;

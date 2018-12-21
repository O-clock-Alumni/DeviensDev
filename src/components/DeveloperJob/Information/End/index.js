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
const End = () => (
  <S.Container>
    <S.WantMore>On creuse le sujet ?</S.WantMore>
    <S.Text>
      Attardons-nous maintenant sur le développement web et&nbsp;ses différents
      métiers.
    </S.Text>

    <S.Button to="/metier-developpeur/specialisations-web">
      Les spécialisations web
    </S.Button>
  </S.Container>
);

/*
 * Export
 */
export default End;

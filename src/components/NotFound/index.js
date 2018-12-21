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
const NotFound = () => (
  <React.Fragment>
    <S.IntroContainer>
      <S.Title>404</S.Title>
    </S.IntroContainer>

    <S.Container>
      <S.Text>
        <S.Bold>Mais c’est quoi une 404 ?</S.Bold>
      </S.Text>
      <S.Text>
        On est là pour apprendre le métier de développeur,
        <br />
        alors on peut bien apprendre ce que c’est qu’une page 404 !
      </S.Text>
      <S.Text>
        404 correspond au statut d’erreur HTTP « Not Found », qui permet au
        serveur de préciser au client que la ressource qui lui a été demandée
        n’a pas été trouvée. En gros, c’est qu’on s’est planté.
      </S.Text>
      <S.Text>
        <br />
        <br />
        Si vous voyez donc cette page, c’est que vous êtes au mauvais endroit.
        <br />
        Vous avez peut-être suivi un lien mal formé ou quelqu’un vous a joué un
        mauvais tour !
      </S.Text>

      <S.Buttons>
        <S.ButtonWithLink to="/">On retourne à l’accueil</S.ButtonWithLink>
      </S.Buttons>
    </S.Container>
  </React.Fragment>
);

/*
 * Export
 */
export default NotFound;

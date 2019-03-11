/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Container, Subtitle, Party, ThirdTitle, Text } from './style';

/*
 * Component
 */
const Terms = () => (
  <Container>
    <Subtitle>Mentions légales</Subtitle>

    <Party>
      <ThirdTitle>Editeur</ThirdTitle>
      <Text>
        O’clock SAS au capital de 15 000 € ayant son siège social au 10 rue de
        penthievre — Paris (75008), immatriculée sous le numéro 818 614 588 au
        RCS de Nanterre.
      </Text>
    </Party>

    <Party>
      <ThirdTitle>Directeur de la publication</ThirdTitle>
      <Text>Anthony Marais</Text>
    </Party>

    <Party>
      <ThirdTitle>Courrier électronique</ThirdTitle>
      <Text>
        <a href="mailto:contact@deviens.dev">contact@deviens.dev</a>
      </Text>
    </Party>

    <Party>
      <ThirdTitle>Hébergeur du site</ThirdTitle>
      <Text>
        Gandi SAS au capital de 800 000 € ayant son siège social au 63-65
        boulevard Massena à Paris (75013), immatriculée sous le numéro 423 093
        459 au RCS de Paris.
      </Text>
    </Party>

    <Party>
      <ThirdTitle>Déclaration CNIL</ThirdTitle>
      <Text>
        Conformément à la loi N°78-17 du 6 janvier 1978 relative à
        l’informatique, aux fichiers et aux libertés, la société O’clock a fait
        l’objet d’une déclaration auprès de la CNIL sous le numéro
        d’enregistrement 2027779
      </Text>
    </Party>
  </Container>
);

/*
 * Export
 */
export default Terms;

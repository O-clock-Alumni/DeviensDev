/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Container, Strong, Text, Title } from './style';

/*
 * Component
 */
const Intro = () => (
  <Container>
    <Title>Parlons Dev</Title>
    <Text>
      <Strong>
        Ici on parle Dev, on écrit Dev, on mange Dev et on dev Dev.
      </Strong>
      <br />
      ParlonsDev, c’est le blog de DeviensDev ! Vous y trouverez des conseils et
      tutos, des témoignages de développeurs chevronnés qui souhaitent partager
      leurs expérience et aussi du contenu totalement inutile mais pourtant
      indispensable à la compréhension de ce métier. Bonne lecture !
    </Text>

    {/* TODO: Logo DeviensDev */}
    {/* <Logo>DeviensDev</Logo> */}
  </Container>
);

/*
 * Export
 */
export default Intro;

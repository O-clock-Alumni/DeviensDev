/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Container, Title, Text, Strong, Link } from './style';

/*
 * Component
 */
const WhoAreWe = () => (
  <Container>
    <Title>C’est quoi DeviensDev ?</Title>

    <Text>
      <Strong>
        DeviensDev est une plateforme où naissent les vocations de développeur.
      </Strong>
      <br />
      Concocté par l’école <Link href="https://oclock.io/">O’clock</Link>,
      DeviensDev est une plateforme d’informations visant à informer sur le
      métier de développeur et de découvrir le développement par le biais de
      parcours d’initiation portant sur des technologies variées. La plateforme
      DeviensDev est open-source et fonctionne sur le principe de contributions.
      Ainsi, tous les professionnels de ce métier qui souhaitent partager leurs
      connaissances, leurs&nbsp;visions et leur passion du métier sont invités à
      contribuer.
    </Text>
  </Container>
);

/*
 * Export
 */
export default WhoAreWe;

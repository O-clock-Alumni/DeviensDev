/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Container, Introduction, Punchline, Site, Text, Title } from './style';

/*
 * Component
 */
const Intro = () => (
  <Container>
    <Title>
      <Text>
        Développeur&nbsp;n’est pas&nbsp;le&nbsp;métier&nbsp;de&nbsp;demain
      </Text>
      <Punchline>C’est celui d’aujourd’hui</Punchline>
    </Title>

    <Introduction>
      Créé par des développeurs, <Site>DeviensDev</Site> vous ouvre les portes
      du développement web en mettant à votre disposition toutes les clés pour
      comprendre le métier de développeur, vous initier au code et vous orienter
      vers les formations adéquates.
    </Introduction>
  </Container>
);

/*
 * Export
 */
export default Intro;

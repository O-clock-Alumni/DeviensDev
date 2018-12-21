/*
 * Package Import
 */
import React from 'react';
import { Link } from 'gatsby';

/*
 * Local Import
 */
import { Container, Title, Text, Strong } from './style';

/*
 * Component
 */
const Intro = () => (
  <Container>
    <Title>Contribuer à DeviensDev</Title>
    <Text>
      <Strong>
        DeviensDev est une plateforme d’information sur le métier de
        développeur.
      </Strong>
      <br />
      Elle repose intégralement sur un système de contribution. Ainsi, tous les
      professionnels du développement qui souhaitent partager leurs
      connaissances, leur vision et leur passion du métier sont invités avec
      plaisir à contribuer à la plateforme. Si tu souhaites apporter ta pierre à
      l’édifice DeviensDev, tu peux écrire un article qui sera publié sur le
      blog : <Link to="/blog">Parlons Dev</Link> ! Pour ce faire, il y a
      quelques étapes à respecter :
    </Text>
  </Container>
);

/*
 * Export
 */
export default Intro;

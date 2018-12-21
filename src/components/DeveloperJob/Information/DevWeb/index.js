/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Container, Title, Text } from './style';

/*
 * Component
 */
const DevWeb = () => (
  <Container>
    <Title>Et le développeur web ?</Title>
    <Text>
      Internet fut une révolution, et notamment le web : ce réseau de sites qui
      comportent aujourd’hui des milliards de pages web sur des millions de
      serveurs. Parmi les développeurs, le développeur web fait donc partie des
      spécialités les plus courantes. En prime, le développement web est un bon
      moyen de mettre le pied à l’étrier, car on a tous sous la main un
      navigateur web, sur notre ordinateur, notre tablette ou notre téléphone.
    </Text>
    <Text>
      Le web est partout. Certaines technologies web sont incontournables, comme
      le HTML pour écrire du contenu, le CSS pour le décorer ou le JavaScript
      pour les interactions côté front-end. Sur la partie back-end, on
      retrouvera du PHP, du Python, du Java, mais aussi encore du JavaScript,
      langage qui peut s’exécuter des deux côtés !
    </Text>
  </Container>
);

/*
 * Export
 */
export default DevWeb;

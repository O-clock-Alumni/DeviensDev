/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import ordi from 'src/assets/images/MetierDev/ordi.png';
import { Bold } from 'src/components/style';
import { Container, Subtitle, Text, Picture, Header, Content } from './style';

/*
 * Component
 */
const DevWhat = () => (
  /* eslint-disable max-len */
  <Container>
    <Header>
      <Subtitle>Développeur : définition</Subtitle>
      <Text>
        Le développeur est un technicien en charge de la réalisation d’un
        système ou d’une application : site web, appli mobile, logiciel
        embarqué, jeu vidéo, distributeur à billets... Lors de la conception
        d’un projet, on exprime les besoins fonctionnels, on détaille ce qu’il
        doit s’afficher, ce qu’il doit se passer. Le rôle du développeur est de{' '}
        <Bold>traduire ces besoins en code</Bold> ; un&nbsp;code que la machine
        pourra comprendre et exécuter.
      </Text>
    </Header>
    <Content>
      <Picture>
        <img src={ordi} alt="Cours HTML" />
      </Picture>
      <Text>
        Pour ce faire,{' '}
        <Bold>le développeur peut s’appuyer sur plusieurs langages</Bold> comme
        le JavaScript, le C, le SQL, le Java, le HTML… Il existe de nombreuses
        technologies différentes, pour des utilisations différentes et des
        contextes différents. Mais on peut tout aussi bien développer la même
        chose avec plusieurs langages ! La phrase que vous lisez actuellement a
        été générée par du JavaScript, mais elle aurait pu être générée par du
        PHP, du Ruby, du Python...
      </Text>
    </Content>
  </Container>
);

/*
 * Export
 */
export default DevWhat;

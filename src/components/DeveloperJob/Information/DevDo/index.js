/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Bold } from 'src/components/style';
import Item from './Item';
import data from './data';
import { Container, Title, Text, Header, Timeline, Line } from './style';

/*
 * Component
 */
const DevDo = () => (
  <Container>
    <Header>
      <Title>Que fait un développeur au quotidien ?</Title>
      <Text>
        Même si le but du jeu est de traduire un besoin en code, le métier de
        développeur ne se résume pas simplement à coder. Taper une ligne de
        code, c’est peut-être même le plus facile ! Encore faut-il savoir ce
        qu’il faut coder, savoir s’organiser et architecturer une application,
        respecter les bonnes pratiques de sécurité, avoir un environnement de
        test… Savoir développer, c’est avant tout avoir{' '}
        <Bold>la capacité d’analyser et d’anticiper</Bold> des problématiques,
        afin de concevoir une solution qui répond efficacement au problème posé.
        Voyons dans le détail :
      </Text>
    </Header>

    {/* Timeline */}
    <Timeline>
      {data.map((item, index) => (
        <Item key={item.title} id={index + 1} {...item} />
      ))}

      <Line />
    </Timeline>
  </Container>
);

/*
 * Export
 */
export default DevDo;

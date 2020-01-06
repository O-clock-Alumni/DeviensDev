/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { translate } from './utils';
import { stepsContribute } from './steps';
import { Header, Title } from './style';
import { List, Item } from '../style';

/*
 * Component
 */
const Propose = () => (
  <Header>
    <Title>Tu souhaites proposer un article ?</Title>

    {/* Steps */}
    <List>
      {stepsContribute.map(({ id, text }) => (
        <Item key={id}>{translate(text)}</Item>
      ))}
    </List>
  </Header>
);

/*
 * Export
 */
export default Propose;

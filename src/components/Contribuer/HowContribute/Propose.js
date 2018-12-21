/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { URL_REPO_GITHUB } from 'src/data';
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
      {/* // @TODO : Gérer le lien dans `translate` */}
      <Item>
        Fork le dépôt{' '}
        <a href={URL_REPO_GITHUB} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </Item>
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

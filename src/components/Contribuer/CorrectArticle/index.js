/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { BoxContainer, BoxTitle, Subtitle, List, Item } from '../style';

/*
 * Component
 */
const CorrectArticle = () => (
  <BoxContainer>
    <BoxTitle>Tu souhaites corriger un article&nbsp;?</BoxTitle>
    <Subtitle>Tu as le choix :</Subtitle>
    <List>
      <Item>
        Suivre la procédure décrite dans «&nbsp;Tu souhaites proposer un
        article&nbsp;»
      </Item>
      <Item>Le faire directement depuis l’interface Github</Item>
    </List>
  </BoxContainer>
);

/*
 * Export
 */
export default CorrectArticle;

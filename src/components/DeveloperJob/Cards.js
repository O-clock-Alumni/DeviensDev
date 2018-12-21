/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import data from './data';
import * as Style from './style';

/*
 * Component
 */
const Cards = () => (
  <Style.CardsContainer>
    <Style.Items>
      {data.map(({ description, title, icon, to, hover }) => (
        <Style.Card key={to}>
          <Style.Box to={to} hover={hover}>
            <Style.Header>{title}</Style.Header>
            <Style.Description icon={icon}>{description}</Style.Description>
          </Style.Box>
        </Style.Card>
      ))}
    </Style.Items>
  </Style.CardsContainer>
);

/*
 * Export
 */
export default Cards;

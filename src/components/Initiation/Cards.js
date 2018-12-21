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
    <Style.Courses>
      {data.map(({ to, empty, stage, icon, hover, description }, index) => {
        const isEven = index % 2 === 0;
        return (
          <Style.Card key={stage}>
            <Style.Box to={to} empty={empty} hover={hover} isEven={isEven}>
              <Style.Header empty={empty}>{stage}</Style.Header>
              <Style.Description icon={icon}>{description}</Style.Description>
            </Style.Box>
          </Style.Card>
        );
      })}
    </Style.Courses>
  </Style.CardsContainer>
);

/*
 * Export
 */
export default Cards;

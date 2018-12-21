/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import data from './data';
import Item from './item';
import * as S from './style';

/*
 * Component
 */
const Developers = () => (
  <S.Container>
    <S.Subtitle>Les différents développeurs web</S.Subtitle>
    {data.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Item key={index} {...item} isLast={index === data.length - 1} />
    ))}
  </S.Container>
);

/*
 * Export
 */
export default Developers;

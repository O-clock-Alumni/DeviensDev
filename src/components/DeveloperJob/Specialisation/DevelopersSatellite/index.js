/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import data from './data';
import Item from './item';
import { Container, Subtitle } from './style';

/*
 * Component
 */
const Satellite = () => (
  <Container>
    <Subtitle>Les métiers satellites</Subtitle>
    {data.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Item key={index} {...item} />
    ))}
  </Container>
);

/*
 * Export
 */
export default Satellite;

/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import items from './items';
import { Container, Content, Item, Title, Text, Button, Image } from './style';

/*
 * Component
 */
const Navigation = () => (
  <Container>
    {items.map(({ to, title, text, image, alt, align }, index) => {
      const isEven = index % 2 !== 0;

      return (
        <Item key={to} isEven={isEven} align={align}>
          {/* Text */}
          <Content>
            <Title align={align}>{title}</Title>
            <Text align={align}>{text}</Text>
            <Button align={align} to={to}>
              Voir plus
            </Button>
          </Content>

          {/* Image */}
          <Content>
            <Image src={image} alt={alt} />
          </Content>
        </Item>
      );
    })}
  </Container>
);

/*
 * Export
 */
export default Navigation;

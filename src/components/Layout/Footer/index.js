/*
 * Package Import
 */
import React from 'react';
import { Link } from 'gatsby';

/*
 * Local Import
 */
import data from './data';
import { Container, Nav, Item, Copyright, Strong } from './style';

/*
 * Component
 */
const Footer = () => (
  <Container>
    <Nav>
      {/* Internal links */}
      {data.map(({ to, label }) => (
        <Item key={to}>
          <Link to={to}>{label}</Link>
        </Item>
      ))}

      {/* Contact */}
      <Item>
        <a href="mailto:contact@deviens.dev">Nous contacter</a>
      </Item>
    </Nav>

    {/* Copyright */}
    <Copyright href="https://oclock.io">
      <div>
        Un site mijoté par l’école <Strong>O’clock</Strong>
      </div>
    </Copyright>
  </Container>
);

/*
 * Export
 */
export default Footer;

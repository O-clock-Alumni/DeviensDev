/*
 * Package Import
 */
import React from 'react';
import { Link } from 'gatsby';

/*
 * Local Import
 */
import data from './data';
import * as S from './style';

/*
 * Component
 */
const Footer = () => (
  <React.Fragment>
    <S.Container>
      <S.Nav>
        {/* Internal links */}
        {data.map(({ to, label }) => (
          <S.Item key={to}>
            <Link to={to}>{label}</Link>
          </S.Item>
        ))}

        {/* Contact */}
        <S.Item>
          <a href="mailto:contact@deviens.dev">Nous contacter</a>
        </S.Item>
      </S.Nav>

      {/* Copyright */}
      <S.Copyright href="https://oclock.io">
        <div>
          Un site mijoté par l’école <S.Strong>O’clock</S.Strong>
        </div>
      </S.Copyright>
    </S.Container>
  </React.Fragment>
);

/*
 * Export
 */
export default Footer;

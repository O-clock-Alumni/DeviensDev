/*
 * Package Import
 */
import React from 'react';
import { PropTypes } from 'prop-types';

/*
 * Local Import
 */
import Momentum from 'src/components/Momentum';
import Header from './Header';
import Footer from './Footer';
import { Main, Container } from './style';

/*
 * Component
 */
const Layout = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Momentum />
    <Footer />
  </Container>
);

/*
 * PropTypes
 */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

/*
 * Export
 */
export default Layout;
